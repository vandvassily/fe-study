# React 架构

## React15架构

分为两层：

- 'Stack' Reconciler(协调器) ---- 负责找出变化的组件
- Renderner(渲染器) --- 负责将变化的组件渲染到页面上

:::tip 提示
注意，体会 **Stack** 这个词。[官网说明](https://zh-hans.reactjs.org/docs/implementation-notes.html)

15架构的缺点是，组件递归更新，更新一旦开始，中途就无法中断。当递归的层级很深，更新时间超过16ms，用户的交互就会卡顿。
解决方案：用可中断的异步更新代替同步更新。
:::

## React16架构

分为三层：

- Scheduler（调度器）—— 调度任务的优先级，高优任务优先进入Reconciler
- 'Fiber' Reconciler（协调器）—— 负责找出变化的组件
- Renderer（渲染器）—— 负责将变化的组件渲染到页面上

> 使用了最新的 **Fiber** 架构

### Scheduler 调度器

调度器的作用是，当浏览器有剩余时间的时候通知我们，在浏览器空闲时出发回调，同时还提供了多种调度任务优先级供任务设置。

### Reconciler 协调器

- 能够把可中断的任务切片处理。
- 能够调整优先级，重置并复用任务。
- 能够在父元素与子元素之间交错处理，以支持 React 中的布局。
- 能够在 `render()` 中返回多个元素。
- 更好地支持错误边界。

> [reconcilers--官网](https://zh-hans.reactjs.org/docs/codebase-overview.html#reconcilers)

:::tip
整个Scheduler与Reconciler的工作都在**内存**中进行。只有当所有组件都完成Reconciler的工作，才会统一交给Renderer。
:::

### Renderer 渲染器

**Renderer** 根据 **Reconciler** 为虚拟DOM打的标记，同步执行对应的操作。

## Fiber

> [Fiber起源](https://github.com/acdlite/react-fiber-architecture)

### Fiber的含义

1. 对于架构来说，相对于以往的 `Stack reconciler` ，新的是基于 `Fiber节点(FiberNode)` 实现的
2. 作为静态的数据结构，每个 `Fiber节点` 对应一个 `React element` ，保存了该组件的类型（函数组件/类组件/原生组件...）、对应的DOM节点等信息。
3. 作为动态的工作单元来说，每个 `Fiber节点` 保存了本次更新中该组件改变的状态、要执行的工作（需要被删除/被插入页面中/被更新...）。

### Fiber结构

FiberNode定义 [FiberNode 源码](https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiber.new.js#L117)

```js
function FiberNode(
  tag: WorkTag,
  pendingProps: mixed,
  key: null | string,
  mode: TypeOfMode,
) {
  // Instance
  this.tag = tag;
  this.key = key;
  this.elementType = null;
  this.type = null;
  this.stateNode = null;

  // Fiber
  this.return = null;
  this.child = null;
  this.sibling = null;
  this.index = 0;

  this.ref = null;

  this.pendingProps = pendingProps;
  this.memoizedProps = null;
  this.updateQueue = null;
  this.memoizedState = null;
  this.dependencies = null;

  this.mode = mode;

  // Effects
  this.effectTag = NoEffect;
  this.subtreeTag = NoSubtreeEffect;
  this.deletions = null;
  this.nextEffect = null;

  this.firstEffect = null;
  this.lastEffect = null;

  this.lanes = NoLanes;
  this.childLanes = NoLanes;

  this.alternate = null;
}
```

1. 作为架构 --- Fiber树
2. 作为静态数据结构 --- Fiber节点
3. 作为动态工作单元 --- Fiber节点中保存了本次更新相关的信息

## 参考文章

[React15架构](https://react.iamkasong.com/preparation/oldConstructure.html)

[新的React架构](https://react.iamkasong.com/preparation/newConstructure.html)

[Fiber架构的实现原理](https://react.iamkasong.com/process/fiber.html)

[reconcilers--官网](https://zh-hans.reactjs.org/docs/codebase-overview.html#reconcilers)

