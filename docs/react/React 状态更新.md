# React状态更新

整个流程

- 触发状态更新
- 创建update对象
- 从fiber向上遍历到root（`markUpdateLaneFromFiberToRoot`）
- 调度更新（`ensureRootIsScheduled`）
- render阶段（`performSyncWorkOnRoot` 或者 `performConcurrentWorkOnRoot`）
- commit阶段（`commitRoot`）

## 触发状态更新的方法

1. ReactDOM.render
2. this.setState
3. this.forceUpdate
4. useState
5. useReducer

## 创建update对象

以上 `状态更新` 都会创建一个保存更新状态相关内容的对象（update）。在 render 阶段的 `beginWork` 中会根据 update 计算新的 state

## 从fiber向上遍历到root

render阶段，是从 rootFiber 向下DFS遍历。从 `触发状态更新的fiber` 到 `rootFiber` 是通过调用 `markUpdateLaneFromFiberToRoot` 方法，向上遍历找到的。

## 调度更新

调度器 `scheduler` 会根据 `更新` 的优先级，决定是以同步还是异步的方式调度本次更新。
调用的方法是 `ensureRootIsScheduled` 。

接下来就衔接上了 render阶段 和 commit阶段。

### 调度用到的算法

小顶堆

<CodeSandbox sandboxUrl="https://codesandbox.io/embed/min-heap-pfzmd?fontsize=14&hidenavigation=1&theme=dark" />

## 参考资料

[状态更新--React技术揭秘--卡颂](https://react.iamkasong.com/state/prepare.html#%E5%87%A0%E4%B8%AA%E5%85%B3%E9%94%AE%E8%8A%82%E7%82%B9)
