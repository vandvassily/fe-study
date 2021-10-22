# React源码

## React源码调试

// TODO:

## 调用栈

`Legacy` 模式

- ReactDOM.render()
- legacyRenderSubtreeIntoContainer
  - legacyCreateRootFromDOMContainer
- unbatchedUpdates   首次渲染(mount)
  - resetRenderTimer
  - flushSyncCallbackQueue
- updateContainer
- enqueueUpdate
- scheduleUpdateOnFiber
- performSyncWorkOnRoot
  - renderRootSync
  - workLoopSync
  - performUnitOfWork
- beginWork
  - updateHostRoot
    - reconcileChildren
      - reconcileChildFibers 根据children的类型，进入不同的 reconciler方法
- commitRoot
- commitRootImpl
- commitBeforeMutationEffects
- commitBeforeMutationLifeCycles
- commitPlacement
- insertOrAppendPlacementNodeIntoContainer

### commitRoot

commit 阶段，最主要的方法就是 `commitRoot`

- Calls the getSnapshotBeforeUpdate lifecycle method on nodes tagged with the Snapshot effect
- Calls the componentWillUnmount lifecycle method on nodes tagged with the Deletion effect
- Performs all the DOM insertions, updates and deletions
- Sets the finishedWork tree as current
- Calls componentDidMount lifecycle method on nodes tagged with the Placement effect
- Calls componentDidUpdate lifecycle method on nodes tagged with the Update effect

```js
function commitRoot(root, finishedWork) {
    commitBeforeMutationLifecycles()
    commitAllHostEffects();
    root.current = finishedWork;
    commitAllLifeCycles();
}
```

## 参考

[react源码解析8.render阶段](https://xiaochen1024.com/courseware/60b1b2f6cf10a4003b634718/60b1b348cf10a4003b634720)

[Inside Fiber: in-depth overview of the new reconciliation algorithm in React](https://indepth.dev/posts/1008/inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react)

[In-depth explanation of state and props update in React](https://indepth.dev/posts/1009/in-depth-explanation-of-state-and-props-update-in-react)
