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
      // 在异步队列执行时，进行更新
      nextTick(flushSchedulerQueue)
    }
  }
}
```


[源码](https://github.com/vuejs/vue/blob/v2.6.14/src/core/util/next-tick.js#L87)

```js
export function nextTick (cb?: Function, ctx?: Object) {
  let _resolve
  // 维护了一个 callbacks 数组
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