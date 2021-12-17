# computed 和 watch 的原理

计算属性和侦听器，内部是基于 `Watcher` 实现的。

首先看一下 `Watcher` 的定义。[源码](https://github.com/vuejs/vue/blob/v2.6.14/src/core/observer/watcher.js)

```js
let uid = 0

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
export default class Watcher {
  vm: Component;
  expression: string;
  cb: Function;
  id: number;
  // ...

  constructor (
    vm: Component,
    expOrFn: string | Function,
    cb: Function,
    options?: ?Object,
    isRenderWatcher?: boolean
  ) {
    this.vm = vm
    if (isRenderWatcher) {
      vm._watcher = this
    }
    vm._watchers.push(this)
    // options
    if (options) {
      // watch 的时候，是否递归监听。用于 使用对象定义的 watch
      this.deep = !!options.deep 
      this.user = !!options.user
      this.lazy = !!options.lazy
      this.sync = !!options.sync
      this.before = options.before
    } else {
      this.deep = this.user = this.lazy = this.sync = false
    }
    this.cb = cb
    this.id = ++uid // uid for batching
    this.active = true
    // computed 计算属性初始化时，lazy 为 true
    this.dirty = this.lazy // for lazy watchers
    this.deps = []
    this.newDeps = []
    this.depIds = new Set()
    this.newDepIds = new Set()
    this.expression = process.env.NODE_ENV !== 'production'
      ? expOrFn.toString()
      : ''
    // parse expression for getter
    if (typeof expOrFn === 'function') {
      this.getter = expOrFn
    } else {
      this.getter = parsePath(expOrFn)
      if (!this.getter) {
        this.getter = noop
        // ...
      }
    }
    // data内的属性会走 this.get()
    this.value = this.lazy
      ? undefined
      : this.get()
  }

  /**
   * Evaluate the getter, and re-collect dependencies.
   */
  // 收集依赖
  get () {
    // 将当前 watcher 实例指向到全局保存的对象(Dep.target)。
    // https://github.com/vuejs/vue/blob/v2.6.14/src/core/observer/dep.js#L54
    // 这一步操作的目的是为了，当访问到某个data内属性时，可以给这个data内属性添加观察者。
    pushTarget(this)
    let value
    const vm = this.vm
    try {
      value = this.getter.call(vm, vm)
    } catch (e) {
      if (this.user) {
        handleError(e, vm, `getter for watcher "${this.expression}"`)
      } else {
        throw e
      }
    } finally {
      // "touch" every property so they are all tracked as
      // dependencies for deep watching
      // 递归监听
      if (this.deep) {
        traverse(value)
      }
      // 从全局保存的 targetStack 数组中弹出，并取栈顶的 watcher，重新指向 Dep.target
      // https://github.com/vuejs/vue/blob/v2.6.14/src/core/observer/dep.js#L54
      popTarget()
      this.cleanupDeps()
    }
    return value
  }

  /**
   * Add a dependency to this directive.
   */
  addDep (dep: Dep) {
    const id = dep.id
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id)
      this.newDeps.push(dep)
      if (!this.depIds.has(id)) {
        dep.addSub(this)
      }
    }
  }

  /**
   * Clean up for dependency collection.
   */
  cleanupDeps () {
    let i = this.deps.length
    while (i--) {
      const dep = this.deps[i]
      if (!this.newDepIds.has(dep.id)) {
        dep.removeSub(this)
      }
    }
    // ...
  }

  /**
   * Subscriber interface.
   * Will be called when a dependency changes.
   */
  update () {
    /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true
    } else if (this.sync) {
      this.run()
    } else {
      queueWatcher(this)
    }
  }

  /**
   * Scheduler job interface.
   * Will be called by the scheduler.
   */
  run () {
    if (this.active) {
      const value = this.get()
      if (
        value !== this.value ||
        // Deep watchers and watchers on Object/Arrays should fire even
        // when the value is the same, because the value may
        // have mutated.
        isObject(value) ||
        this.deep
      ) {
        // set new value
        const oldValue = this.value
        this.value = value
        if (this.user) {
          const info = `callback for watcher "${this.expression}"`
          invokeWithErrorHandling(this.cb, this.vm, [value, oldValue], this.vm, info)
        } else {
          this.cb.call(this.vm, value, oldValue)
        }
      }
    }
  }

  /**
   * Evaluate the value of the watcher.
   * This only gets called for lazy watchers.
   */
  // 计算属性，依赖改变的情况下，重新计算
  evaluate () {
    this.value = this.get()
    this.dirty = false
  }

  /**
   * Depend on all deps collected by this watcher.
   */
  depend () {
    let i = this.deps.length
    while (i--) {
      this.deps[i].depend()
    }
  }
  // ...
}
```

## 计算属性 `computed`

### 目的

1. 从模板中抽离逻辑，使模板结构清晰
2. 缓存已处理的数据，只有依赖项改变的情况下才会去重新计算

### 用法

```js
// 官方API: https://cn.vuejs.org/v2/api/#computed
// ...
computed: {
  // 仅读取
  aDouble: function () {
    return this.a * 2
  },
  // 读取和设置
  aPlus: {
    get: function () {
      return this.a + 1
    },
    set: function (v) {
      this.a = v - 1
    }
  }
}
```
### 源码解析

[源码](https://github.com/vuejs/vue/blob/v2.6.14/src/core/instance/state.js#L168)

```js
// lazy用于 computed 的属性初始化的时候，不会触发 getter，也就不会收集依赖
const computedWatcherOptions = { lazy: true }

function initComputed (vm: Component, computed: Object) {
  // $flow-disable-line
  const watchers = vm._computedWatchers = Object.create(null)
  // computed properties are just getters during SSR
  const isSSR = isServerRendering()

  for (const key in computed) {
    const userDef = computed[key]
    // 判断 computed 的属性是否是函数;不是的话，直接使用对象的 get
    // 这也是为什么计算属性可以使用函数定义，也可以使用 {get: function, set: function} 定义
    const getter = typeof userDef === 'function' ? userDef : userDef.get
    if (process.env.NODE_ENV !== 'production' && getter == null) {
      warn(
        `Getter is missing for computed property "${key}".`,
        vm
      )
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      )
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef)
    }
    // ...
  }
}

// 将computed的属性，添加在 vm 的实例上，这样可以通过 this.XXX访问
export function defineComputed (
  target: any,
  key: string,
  userDef: Object | Function
) {
  const shouldCache = !isServerRendering()
  if (typeof userDef === 'function') {
    // 非服务端渲染，需要使用缓存。即 computed 在依赖未变化的情况下，使用缓存数据
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef)
    sharedPropertyDefinition.set = noop
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop
    sharedPropertyDefinition.set = userDef.set || noop
  }
  // ...

  // 绑定到 vm 实例上
  Object.defineProperty(target, key, sharedPropertyDefinition)
}

function createComputedGetter (key) {
  return function computedGetter () {
    const watcher = this._computedWatchers && this._computedWatchers[key]
    if (watcher) {
      // 如果 dirty === true，则重新计算
      if (watcher.dirty) {
        watcher.evaluate()
      }
      if (Dep.target) {
        watcher.depend()
      }
      // 取缓存的值
      return watcher.value
    }
  }
}
```

至此，`initComputed` 的初始化过程结束。下一阶段，在 `mounted` 阶段之前，会执行一次 `render` 方法。

```js
// ...
computed: {
  fullName: function(){
    return this.firstName + this.lastName
  }
}
```

假设 `computed` 上有计算属性 `fullName` 时，`render`方法执行时，访问到 `fullName` ，
会执行属性的 `getter` (也就是 `fullName` 定义的函数)  ，访问到 `this.firstName` 会给 `firstName` 这个监听属性添加观察者(计算属性 `fullName` 这个watcher )。同理 `lastName` 也是这样处理。

最后执行计算并缓存 `fullName` 这个值，。

## 侦听器 `watch`

当需要在数据变化时执行异步或开销较大的操作时使用侦听器属性。

### 用法

类型：{ [key: string]: string | Function | Object | Array }

[官网API](https://cn.vuejs.org/v2/api/#watch)

```js
watch: {
  a: function (val, oldVal) {
    console.log('new: %s, old: %s', val, oldVal)
  },
  // 方法名
  b: 'someMethod',
  // 该回调会在任何被侦听的对象的 property 改变时被调用，不论其被嵌套多深
  c: {
    handler: function (val, oldVal) { /* ... */ },
    deep: true
  },
  // 该回调将会在侦听开始之后被立即调用
  d: {
    handler: 'someMethod',
    immediate: true
  },
  // 你可以传入回调数组，它们会被逐一调用
  e: [
    'handle1',
    function handle2 (val, oldVal) { /* ... */ },
    {
      handler: function handle3 (val, oldVal) { /* ... */ },
      /* ... */
    }
  ],
  // watch vm.e.f's value: {g: 5}
  'e.f': function (val, oldVal) { /* ... */ }
}
```

### 源码解析

初始化时，根据不同的类型，进入不同的创建过程。

[源码](https://github.com/vuejs/vue/blob/v2.6.14/src/core/instance/state.js#L293)

```js
function initWatch (vm: Component, watch: Object) {
  for (const key in watch) {
    const handler = watch[key]
    if (Array.isArray(handler)) {
      for (let i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i])
      }
    } else {
      createWatcher(vm, key, handler)
    }
  }
}

function createWatcher (
  vm: Component,
  expOrFn: string | Function,
  handler: any,
  options?: Object
) {
  // 针对不同的 watch 定义方式
  if (isPlainObject(handler)) {
    options = handler
    handler = handler.handler
  }
  if (typeof handler === 'string') {
    handler = vm[handler]
  }
  return vm.$watch(expOrFn, handler, options)
}

// ...
Vue.prototype.$watch = function (
  expOrFn: string | Function,
  cb: any,
  options?: Object
): Function {
  const vm: Component = this
  if (isPlainObject(cb)) {
    return createWatcher(vm, expOrFn, cb, options)
  }
  options = options || {}
  options.user = true
  // 初始化 watcher 实例时，会执行一次 watcher.get() 和 expOrFn
  const watcher = new Watcher(vm, expOrFn, cb, options)
  // immediate为true，则立即执行 watcher 的 handler
  if (options.immediate) {
    try {
      cb.call(vm, watcher.value)
    } catch (error) {
      handleError(error, vm, `callback for immediate watcher "${watcher.expression}"`)
    }
  }
  return function unwatchFn () {
    watcher.teardown()
  }
}
```