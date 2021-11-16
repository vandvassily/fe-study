# React Scheduler 调度器和优先级

React 是通过 `Scheduler` 调度任务的。

## 如何调度任务？

每当需要调度任务的时候，React 都会调用 `Scheduler` 提供的 `runWithPriority` 。

该方法接受一个 **优先级** 常量和一个 **回调函数** 作为参数。

## 什么是优先级？

// TODO: Lane模型

状态更新由用户交互产生，用户心里对交互执行顺序有个预期。React根据人机交互研究的结果中用户对交互的预期顺序为交互产生的状态更新赋予不同优先级。

具体如下：

- 生命周期方法：同步执行。

- 受控的用户输入：比如输入框内输入文字，同步执行。

- 交互事件：比如动画，高优先级执行。

- 其他：比如数据请求，低优先级执行。


## 参考资料

[React Fiber的优先级调度机制与事件系统](https://zhuanlan.zhihu.com/p/95443185)

[深入理解优先级](https://react.iamkasong.com/state/priority.html#%E4%BB%80%E4%B9%88%E6%98%AF%E4%BC%98%E5%85%88%E7%BA%A7)
