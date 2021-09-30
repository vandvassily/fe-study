# React Hooks

## 为什么使用React Hooks？

### 1. 不必要的组件重构

在React的类组件中，可以使用状态管理、生命周期和副作用。当一个函数式组件（无状态管理）要使用状态管理，那就必须重构为
类组件。

通过使用 `React Hooks` ，可以方便的在函数式组件中使用 状态管理和副作用。

### 2. 副作用逻辑

一些副作用，例如 `数据请求` 和 `浏览器交互` ，在类组件的不同生命周期中添加和移除。

使用 `React Hooks` 后，可以在 `useEffect` 中直接添加和移除副作用，集中代码的逻辑。



## 资料文章

[React Hooks Tutorial](https://www.robinwieruch.de/react-hooks)

[How to fetch data with React Hooks](https://www.robinwieruch.de/react-hooks-fetch-data)

[A Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/)