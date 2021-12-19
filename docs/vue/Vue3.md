# Vue3

## 新增的功能

1. Composition API 组合式API，
2. Tree-Shaking
3. 数据绑定使用 `proxy` 代替 `defineProperty`
4. TS的支持
5. 编译模板优化

## Composition API 组合式API

### 设计动机：逻辑组合与复用，关注点分离

使用 (data、computed、methods、watch) 组件选项来组织逻辑通常都很有效。然而，当我们的组件开始变得更大时，逻辑关注点的列表也会增长。

碎片化的逻辑使得理解和维护复杂组件变得困难。在处理单个逻辑关注点时，我们要不断的跳转相关代码的实现块。

### 启发

受 React Hooks 启发，但是又有不同的地方。

传送门：--> [Vue Function-based API RFC](https://zhuanlan.zhihu.com/p/68477600)

- 整体上更符合 JavaScript 的直觉；
- 不受调用顺序的限制，可以有条件地被调用；
- 不会在后续更新时不断产生大量的内联函数而影响引擎优化或是导致 GC 压力；
- 不需要总是使用 useCallback 来缓存传给子组件的回调以防止过度更新；
- 不需要担心传了错误的依赖数组给 useEffect/useMemo/useCallback 从而导致回调中使用了过期的值 —— Vue 的依赖追踪是全自动的。

## Tree-Shaking

很多时候，我们并不需要 vue提供的所有功能。在 vue 2 并没有方式排除掉，但是 3.0 都做成了按需引入。

一些功能，包括 `v-model` `<transition>` 等，都支持 `tree-shaking` 。

这样打包体积更小。

## 参考资料

[Vue Function-based API RFC](https://zhuanlan.zhihu.com/p/68477600)

[抄笔记：尤雨溪在Vue3.0 Beta直播里聊到了这些…](https://juejin.cn/post/6844904134303301645)
