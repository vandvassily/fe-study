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