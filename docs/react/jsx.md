# JSX是什么？

```js
const element = <h1>Hello, world!</h1>;
```

它被称为 JSX，是一个 JavaScript 的语法扩展。我们建议在 React 中配合使用 JSX，JSX 可以很好地描述 UI 应该呈现出它应有交互的本质形式。 [JSX 简介 -- 官网](https://zh-hans.reactjs.org/docs/introducing-jsx.html)

`JSX` 在编译时，会被 `Babel` 编译为 `React.createElement` 方法。

```js
function App() {
  return <h1>Hello World</h1>;
}

// 转换结果
function App() {
  return React.createElement('h1', null, 'Hello world');
}
```

:::tip
在React17中，使用了新的JSX转换。[介绍全新的 JSX 转换](https://zh-hans.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)
:::

## 参考

[深入理解JSX](https://react.iamkasong.com/preparation/jsx.html#jsx%E7%AE%80%E4%BB%8B)