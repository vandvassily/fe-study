# React的生命周期

React的生命周期，看图会更容易理解。

## 生命周期流程

[展示生命周期](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

![/img/js_study/prototype/prototype.jpg](../.vuepress/public/img/react/react_lifecircle.jpg)

### 挂载时

`constructor` -> `render` -> `componentDidMount`

### 更新时

`New props/ setState() / forceUpdate()` -> `render` -> `componentDidUpdate`

### 卸载时

`componentWillUnmount`

### 父子孙组件中，生命周期以及Hooks的执行顺序

组件结构如下

```js
/**
 * 执行顺序是什么样的？
 *       App
 *       /   \
 *   parent  sibling
 *     /  \
 *   son  son
 *   /
 * grandSon
 */
```

#### render

##### Hooks的执行

```js
interface ComProps {
  name?: string;
}

const Com: React.FC<ComProps> = ({ name, children }) => {
  console.log(`render ${name}`);
  useEffect(() => {
    console.log(`useEffect ${name}`);
  }, [name]);

  useLayoutEffect(() => {
    console.log(`useLayoutEffect ${name}`);
  }, [name]);

  return (
    <div>
      <div>{name}</div>
      {children}
    </div>
  );
};

const GrandSon = () => {
  return <Com name="GrandSon" />;
};

const Son1 = () => {
  return (
    <Com name="Son1">
      <GrandSon />
    </Com>
  );
};

const Son2 = () => {
  return <Com name="Son2" />;
};

const Parent = () => {
  return (
    <Com name="Parent">
      <Son1 />
      <Son2 />
    </Com>
  );
};

const Sibling = () => {
  return <Com name="Sibling" />;
};

export default function App() {
  return (
    <Com name="App">
      <Parent />
      <Sibling />
    </Com>
  );
}
// render App 
// render Parent 
// render Son1 
// render GrandSon 
// render Son2 
// render Sibling 
// useLayoutEffect GrandSon 
// useLayoutEffect Son1 
// useLayoutEffect Son2 
// useLayoutEffect Parent 
// useLayoutEffect Sibling 
// useLayoutEffect App 
// useEffect GrandSon 
// useEffect Son1 
// useEffect Son2 
// useEffect Parent 
// useEffect Sibling 
// useEffect App 
```

1. 深度优先
2. 先父后子
3. 子渲染后再往上归，到（父）相邻的兄弟节点

[codesandbox Demo](https://codesandbox.io/s/react-lifecircle-3u2mx?file=/src/App.tsx)

// TODO:

### 类组件生命周期钩子函数和useEffect的差异

#### 类组件 cDM cDU 钩子
[类组件Demo](https://codesandbox.io/s/react-lifecircle2-0i0ie?file=/src/App.tsx)

## 参考

[React生命周期流程图及简述](https://www.jianshu.com/p/fb25accc5548)
