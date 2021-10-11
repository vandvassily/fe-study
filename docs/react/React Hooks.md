# React Hooks

Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

## Hook 是什么？

Hook 是一个特殊的函数，它可以让你“钩入” React 的特性。例如，useState 是允许你在 React 函数组件中添加 state 的 Hook

## 什么时候会用 Hook？

如果你在编写函数组件并意识到需要向其添加一些 state，以前的做法是必须将其转化为 class。现在你可以在现有的函数组件中使用 Hook。
## 为什么使用React Hooks？

### 1. 不必要将组件重构为类组件

在React的类组件中，可以使用状态管理、生命周期和副作用。当一个函数式组件（无状态管理）要使用状态管理，那就必须重构为类组件(React v16.8之前)。

`React Hooks` ，使你在无需修改组件结构的情况下复用状态逻辑，可以方便的在函数式组件中使用 状态管理和副作用。

### 2. 副作用逻辑难以理解和复用

在 `React类组件` 中，一些副作用，例如 `数据请求` 和 `浏览器交互` ，通常是在类组件的不同生命周期（例如 componentDidMount, componentDidUpdate, componentWillUnmount）中添加和移除。

使用 `React Hooks` 后，可以在 `useEffect` 中直接添加和移除副作用，方便开发者集中书写代码的逻辑。

```js
import React from 'react';
 
// side-effects in a React class component
class MyComponent extends React.Component {
  // setup phase
  componentDidMount() {
    // add listener for feature 1
    // add listener for feature 2
  }
 
  // clean up phase
  componentWillUnmount() {
    // remove listener for feature 1
    // remove listener for feature 2
  }
 
  ...
}
 
// side-effects in React function component with React Hooks
function MyComponent() {
  React.useEffect(() => {
    // add listener for feature 1 (setup)
    // return function to remove listener for feature 1 (clean up)
  });
 
  React.useEffect(() => {
    // add listener for feature 2 (setup)
    // return function to remove listener for feature 2 (clean up)
  });
 
  ...
}
```

### 3. React 复杂的抽象概念

使用 `Higher-Order Components` 、 `Render Prop Components` 和 `React Context` 来提高复用性。在大型应用中，这些高级概念都使用 `wrapping components` 包装组件，不方便开发者了解组件内的具体实现。

```js
import { compose, withReducer } from 'recompose';
import { withRouter } from 'react-router-dom';
 
function App({ history, state, dispatch }) {
  return (
    <ThemeContext.Consumer>
      {theme =>
        <Content theme={theme}>
          ...
        </Content>
      }
    </ThemeContext.Consumer>
  );
}
 
export default compose(
  withRouter,
  withReducer(reducer, initialState)
)(App);
```

所有的这些高阶组件，导致组件树不变阅读。通过使用 `hooks` ，你可以移除所有的包装组件并拍平组件树结构。

```js
import React from 'react';
import { useTheme } from 'styled-components';
import { useRouter } from 'react-router-dom';
 
function App() {
  const theme = useTheme();
  const history = useRouter();
  const [state, dispatch] = React.useReducer(reducer, initialState);
 
  return (
    <Content theme={theme}>
      ...
    </Content>
  );
}
 
export default App;
```

### 4. 难以理解的class

JS混合了面向对象编程（OOP）和函数式编程（FP）。 React 通过介绍函数合成、一些编程概念（高阶函数、JS内置方法map、reduce），使开发者了解和使用函数式编程。

另一边，React还可以使用JS类去定义组件。但是，JS类对于没有OOP背景的初学者来说，学习曲线陡峭，容易使他们迷惑。

```js
// WHY IS IT EXTENDING FROM SOMETHING?
class Counter extends Component {
  // WAIT ... THIS WORKS???
  // https://github.com/the-road-to-learn-react/react-alternative-class-component-syntax
  state = { value: 0 };
 
  // I THOUGH IT'S THIS WAY, BUT WHY DO I NEED PROPS HERE?
  // constructor(props) {
  //  IS SUPER NECCESSARY???
  //  super(props);
  //
  //  this.state = {
  //    value: 0,
  //  };
  // }
 
  // WHY DO I HAVE TO USE AN ARROW FUNCTION???
  onIncrement = () => {
    this.setState(state => ({
      value: state.value + 1
    }));
  };
 
  // SHOULDN'T IT BE this.onDecrement = this.onDecrement.bind(this); IN THE CONSTRUCTOR???
  // WHAT'S this.onDecrement = this.onDecrement.bind(this); DOING ANYWAY?
  onDecrement = () => {
    this.setState(state => ({
      value: state.value - 1
    }));
  };
 
  render() {
    return (
      <div>
        {this.state.value}
 
        {/* WHY IS EVERYTHING AVAILABLE ON "THIS"??? */}
        <button onClick={this.onIncrement}>+</button>
        <button onClick={this.onDecrement}>-</button>
      </div>
    )
  }
}
```

JS类的概念不容易理解，因此有些人建议将JS类从React中移除。如今，对于初学者来说，使用 `React Hooks` 来书写React 组件，学习曲线更加平滑。

## React Hooks

### useState

```js{1,5,10}
import React, { useState } from 'react';

function Example() {
  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

#### 声明state
##### 1. 调用 useState 方法的时候做了什么?

它定义一个 “state 变量”。这是一种在函数调用时保存变量的方式 —— useState 是一种新方法，它与 class 里面的 this.state 提供的功能完全相同。

##### 2. useState 需要哪些参数？

useState() 方法里面唯一的参数就是初始 state。不同于 class 的是，我们可以按照需要使用数字或字符串对其进行赋值，而不一定是对象。

##### 3. useState 方法的返回值是什么？ 

返回值为：当前 state 以及更新 state 的函数

#### 读取state

在函数中，我们可以直接用 `count` :

```js
<p>You clicked {count} times</p>
```

#### 更新 State

在函数中，我们已经有了 setCount 和 count 变量，所以我们不需要 this:

```js
  <button onClick={() => setCount(count + 1)}>
    Click me
  </button>
```

#### 总结




### useMemo

```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

返回一个 memoized 值。把“创建”函数和依赖项数组作为参数传入 useMemo，它仅会在某个依赖项改变时才重新计算 memoized 值。这种优化有助于避免在每次渲染时都进行高开销的计算。

:::tip
传入 useMemo 的函数会在渲染期间执行。请不要在这个函数内部执行与渲染无关的操作，诸如副作用这类的操作属于 useEffect 的适用范畴，而不是 useMemo。
:::

### useRef

```js
const refContainer = useRef(initialValue);
```

useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。返回的 ref 对象在组件的整个生命周期内保持不变。

```js
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

useRef 就像是可以在其 .current 属性中保存一个可变值的“盒子”。

如果你将 ref 对象以 <div ref={myRef} /> 形式传入组件，则无论该节点如何改变，React 都会将 ref 对象的 .current 属性设置为相应的 DOM 节点。

### useLayoutEffect

其函数签名与 useEffect 相同，但它会在所有的 DOM 变更之后同步调用 effect。可以使用它来读取 DOM 布局并同步触发重渲染。在浏览器执行绘制之前，useLayoutEffect 内部的更新计划将被同步刷新。

:::tip
尽可能使用标准的 useEffect 以避免阻塞视觉更新
:::


## 资料文章

[Hook 简介](https://react.docschina.org/docs/hooks-intro.html)

[React Hooks Tutorial](https://www.robinwieruch.de/react-hooks)

[How to fetch data with React Hooks](https://www.robinwieruch.de/react-hooks-fetch-data)

[A Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/)