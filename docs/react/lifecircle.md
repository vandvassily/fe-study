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

#### Hooks的执行
##### render阶段

```ts
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

函数组件

<CodeSandbox sandboxUrl="https://codesandbox.io/s/react-lifecircle-3u2mx?fontsize=14&hidenavigation=1&theme=dark" />

#### 类组件 cDM cDU 钩子

类组件

<CodeSandbox sandboxUrl="https://codesandbox.io/embed/react-lifecircle2-0i0ie?fontsize=14&hidenavigation=1&theme=dark" />

1. mount时
   1. render阶段: 深度优先遍历（从父到子），依次执行节点的 `constructor` `gDSFP` `render`
   2. commit阶段: 深度优先遍历的冒泡阶段（从子到父），依次执行 `cDM`
2. update时
   1. render阶段: 深度优先遍历，从变化的节点开始，依次执行节点的  `gDSFP` `render`
   2. commit阶段: 深度优先遍历的冒泡阶段（从子到父），执行对应变化节点的dom操作，然后执行 `gSBU` `cDU`
3. unmount时
   1. commit阶段执行 `cWU`


> // TODO: 用最新的react试一下

[react-dom-diff](https://supnate.github.io/react-dom-diff/index.html)

用 `React17` 重写了 `dom diff`

<CodeSandbox sandboxUrl="https://codesandbox.io/embed/react-dom-diff-9ozkl?fontsize=14&hidenavigation=1&theme=dark" />

::: tip
1. shape5 在组件中增加了 key，因此从 shape4 到 shape5 的时候，原有的 B和C 并没有得到复用。
2. shape5 到 shape6 节点得到了复用
:::

### 问题

#### 类组件生命周期钩子函数和useEffect的差异

// TODO:
## 参考

[React生命周期流程图及简述](https://www.jianshu.com/p/fb25accc5548)
