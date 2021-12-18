# 异步更新队列

在 [Vue.js2.0 官网深入响应式原理](https://cn.vuejs.org/v2/guide/reactivity.html)这一章中，提到了[异步更新队列](https://cn.vuejs.org/v2/guide/reactivity.html#%E5%BC%82%E6%AD%A5%E6%9B%B4%E6%96%B0%E9%98%9F%E5%88%97)。

## 为什么在更新DOM时是异步执行的？

[异步更新队列介绍 --- 摘自官网](https://cn.vuejs.org/v2/guide/reactivity.html#%E5%BC%82%E6%AD%A5%E6%9B%B4%E6%96%B0%E9%98%9F%E5%88%97)

考虑一下这个场景，在同一个事件循环中发生数据变更，且同一个 `watcher` 被多次触发。

如果是更新DOM是同步执行的，那么同一个DOM会短时间内先后被更改多次，浪费了性能。

采用异步更新DOM，同一个 watcher 被多次触发，只会被推入到队列中一次，避免了很多不必要的计算。

在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。Vue 在内部对异步队列尝试使用原生的 Promise.then、MutationObserver 和 setImmediate，如果执行环境不支持，则会采用 setTimeout(fn, 0) 代替。

例如，当你设置 vm.someData = 'new value'，该组件不会立即重新渲染。当刷新队列时，组件会在下一个事件循环“tick”中更新。多数情况我们不需要关心这个过程，但是如果你想基于更新后的 DOM 状态来做点什么，这就可能会有些棘手。虽然 Vue.js 通常鼓励开发人员使用“数据驱动”的方式思考，避免直接接触 DOM，但是有时我们必须要这么做。为了在数据变化之后等待 Vue 完成更新 DOM，可以在数据变化之后立即使用 Vue.nextTick(callback)。这样回调函数将在 DOM 更新完成后被调用。

## 源码解析

当被观察的数据发生改变，触发更新。[源码](https://github.com/vuejs/vue/blob/v2.6.14/src/core/observer/dep.js#L37)

```js
export default class Dep {
  // ...
  notify () {
    // stabilize the subscriber list first
    const subs = this.subs.slice()
    // ...
    for (let i = 0, l = subs.length; i < l; i++) {
      // 所有的 watcher 执行 update
      subs[i].update()
    }
  }
}
```

观察者执行 `update` 方法。[源码](https://github.com/vuejs/vue/blob/v2.6.14/src/core/observer/watcher.js#L164)

```js
export default class Watcher {
  // ...
  /**
   * Subscriber interface.
   * Will be called when a dependency changes.
   */
  update () {
    /* istanbul ignore else */
    if (this.lazy) {
      // 这个是 计算属性观察时 使用
      this.dirty = true
    } else if (this.sync) {
      // 如果设置为同步模式
      this.run()
    } else {
      // 推入到更新队列中
      queueWatcher(this)
    }
  }
}
```

[源码](https://github.com/vuejs/vue/blob/v2.6.14/src/core/observer/scheduler.js)

```js
/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
// 将观察者推入到观察者队列。除非是队列已经执行完，否则相同 ID 的观察者，会被跳过。
export function queueWatcher (watcher: Watcher) {
  const id = watcher.id
  // 全局维护了一个 has 的 map 对象，里边存储的是已经推入的观察者编号
  if (has[id] == null) {
    has[id] = true
    // 全局维护了一个 更新 的状态
    if (!flushing) {
      // 不是正在执行更新的状态，则直接将 watcher 推入到更新队列中
      queue.push(watcher)
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      let i = queue.length - 1
      while (i > index && queue[i].id > watcher.id) {
        i--
      }
      queue.splice(i + 1, 0, watcher)
    }
    // queue the flush
    if (!waiting) {
      waiting = true

      if (process.env.NODE_ENV !== 'production' && !config.async) {
        flushSchedulerQueue()
        return
      }
      // 将队列回调推入到 EventLoop 的异步队列中
      nextTick(flushSchedulerQueue)
    }
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow()
  flushing = true
  let watcher, id

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 一个组件中用户创建的观察者要先执行（因为用户创建的观察者先于render观察者创建）
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  // 排序的目的是保证父组件先执行（因为父组件永远先于子组件创建，所以 父id < 子id）
  queue.sort((a, b) => a.id - b.id)

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index]
    if (watcher.before) {
      watcher.before()
    }
    id = watcher.id
    has[id] = null
    // 执行 watcher实例 的 run 方法
    watcher.run()
    // ...
  }

  // keep copies of post queues before resetting state
  const activatedQueue = activatedChildren.slice()
  const updatedQueue = queue.slice()

  // 重置状态
  resetSchedulerState()

  // call component updated and activated hooks
  // 执行组件 activated 和 updated 钩子
  callActivatedHooks(activatedQueue)
  callUpdatedHooks(updatedQueue)
  // ...
}
```

`nextTick` 方法将 `flushSchedulerQueue` 回调函数推入到 `callbacks` 数组中，待 `EventLoop` 中的同步代码执行完毕，`JS引擎` 清空 `异步任务队列` 时执行 `flushSchedulerQueue` 回调。
[源码](https://github.com/vuejs/vue/blob/v2.6.14/src/core/util/next-tick.js#L87)

```js
export function nextTick (cb?: Function, ctx?: Object) {
  let _resolve
  // 维护了一个 callbacks 数组，里边存放的是 flushSchedulerQueue 回调函数
  callbacks.push(() => {
    if (cb) {
      try {
        cb.call(ctx)
      } catch (e) {
        handleError(e, ctx, 'nextTick')
      }
    } else if (_resolve) {
      _resolve(ctx)
    }
  })
  if (!pending) {
    pending = true
    // 执行异步 timerFunc 方法
    // 该方法针对不同浏览器做了兼容降级处理 Promise -> MutationObserver -> setImmediate -> setTimeout
    // 源码：https://github.com/vuejs/vue/blob/v2.6.14/src/core/util/next-tick.js#L33
    timerFunc()
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(resolve => {
      _resolve = resolve
    })
  }
}
```

`timerFunc` 异步执行 `flushCallbacks` ，执行并清空 `callbacks` 数组。
[源码](https://github.com/vuejs/vue/blob/v2.6.14/src/core/util/next-tick.js#L13)

```js
function flushCallbacks () {
  pending = false
  const copies = callbacks.slice(0)
  callbacks.length = 0
  for (let i = 0; i < copies.length; i++) {
    copies[i]()
  }
}
```

## 实际应用

例如，当 `data.count` 的数值更改为 `1` ，通过 `this.count` 访问得到的数值也是 `1` 。但是 `DOM` 上的更新时异步执行的，我们在异步任务未执行完成前调用原生JS的方法去获取 `DOM` 上的数值，则还是更新之前的 `0` 。通过使用官方提供的 `nextTick` 方法，就可以在回调中获取到最新的值 `1` 。

<CodeSandbox sandboxUrl="https://codesandbox.io/embed/vue2-nexttick-wzdzk?fontsize=14&hidenavigation=1&theme=dark" />