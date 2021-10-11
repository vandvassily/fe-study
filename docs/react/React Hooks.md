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

## React Hooks 用法

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

#### 使用useState的提示

1. 与 class 组件中的 setState 方法不同，useState 不会自动合并更新对象。你可以用函数式的 setState 结合展开运算符来达到合并更新对象的效果。

```js
const [state, setState] = useState({});
setState(prevState => {
  // 也可以使用 Object.assign
  return {...prevState, ...updatedValues};
});
```

### useEffect

副作用，数据获取，设置订阅以及手动更改 React 组件中的 DOM 都属于副作用。

Effect Hook 可以让你在函数组件中执行副作用操作。

::: tip
如果你熟悉 React class 的生命周期函数，你可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。
:::

#### 不需清除的 Effect

```js{1,6-9}
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

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

仔细观察上面的例子。

<strong>useEffect 做了什么？</strong> 通过使用这个 Hook，你可以告诉 React 组件需要在渲染后执行某些操作。React 会保存你传递的函数（我们将它称之为 “effect”），并且在执行 DOM 更新之后调用它。

<strong>为什么在组件内部调用 useEffect？</strong> 将 useEffect 放在组件内部让我们可以在 effect 中直接访问 count state 变量（或其他 props）。我们不需要特殊的 API 来读取它 —— 它已经保存在函数作用域中。Hook 使用了 JavaScript 的闭包机制

<strong>useEffect 会在每次渲染后都执行吗？</strong> 是的，默认情况下，它在第一次渲染之后和每次更新之后都会执行。

::: tip
传递给 useEffect 的函数在每次渲染中都会有所不同，这是刻意为之的。事实上这正是我们可以在 effect 中获取最新的 count 的值，而不用担心其过期的原因。每次我们重新渲染，都会生成新的 effect，替换掉之前的。
:::

#### 需要清除的Effect

```js{6-15}
import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // Specify how to clean up after this effect:
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
```

<strong>为什么要在 effect 中返回一个函数？</strong> 这是 effect 可选的清除机制。每个 effect 都可以返回一个清除函数。如此可以将添加和移除订阅的逻辑放在一起。它们都属于 effect 的一部分。

<strong>React 何时清除 effect？</strong> React 会在组件卸载的时候执行清除操作。正如之前学到的，effect 在每次渲染的时候都会执行。这就是为什么 React 会在执行当前 effect 之前对上一个 effect 进行清除。

:::tip
为防止内存泄漏，清除函数会在组件卸载前执行。另外，如果组件多次渲染（通常如此），则在执行下一个 effect 之前，上一个 effect 就已被清除。
:::

#### useEffect的执行时机

与 componentDidMount、componentDidUpdate 不同的是，传给 useEffect 的函数会在浏览器完成布局与绘制之后，在一个延迟事件中被调用。这使得它适用于许多常见的副作用场景，比如设置订阅和事件处理等情况，因为绝大多数操作不应阻塞浏览器对屏幕的更新。

虽然 useEffect 会在浏览器绘制后延迟执行，但会保证在任何新的渲染前执行。在开始新的更新前，React 总会先清除上一轮渲染的 effect。

:::tip
并非所有 effect 都可以被延迟执行。例如，一个对用户可见的 DOM 变更就必须在浏览器执行下一次绘制前被同步执行，这样用户才不会感觉到视觉上的不一致。（概念上类似于被动监听事件和主动监听事件的区别。）React 为此提供了一个额外的 `useLayoutEffect` Hook 来处理这类 effect。它和 useEffect 的结构相同，区别只是调用时机不同。
:::

#### useEffect总结

`useEffect` 可以在组件渲染后实现各种不同的副作用。有些副作用可能需要清除，所以需要返回一个函数。其他的 effect 可能不必清除，所以不需要返回

#### 使用useEffect的提示

1. 使用多个 Effect 实现关注点分离
2. 通过跳过 Effect 进行性能优化
   1. 传入第二个参数
   2. useEffect中进行条件判断

### useContext

[官方文档](https://zh-hans.reactjs.org/docs/hooks-reference.html#usecontext)

### useReducer

[useState](#usestate) 的替代方案。它接收一个形如 `(state, action) => newState` 的 reducer，并返回当前的 state 以及与其配套的 dispatch 方法。

```js
const [state, dispatch] = useReducer(reducer, initialArg, init);
```

在某些场景下，useReducer 会比 useState 更适用，例如 state 逻辑较复杂且包含多个子值，或者下一个 state 依赖于之前的 state 等。并且，使用 useReducer 还能给那些会触发深更新的组件做性能优化，因为你可以向子组件传递 dispatch 而不是回调函数

:::tip
React 会确保 dispatch 函数的标识是稳定的，并且不会在组件重新渲染时改变。这就是为什么可以安全地从 useEffect 或 useCallback 的依赖列表中省略 dispatch。
:::

如果 Reducer Hook 的返回值与当前 state 相同，React 将跳过子组件的渲染及副作用的执行。

[官方文档](https://zh-hans.reactjs.org/docs/hooks-reference.html#usereducer)

### useCallback

```js
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```

### Hook的规则

1. 只在最顶层使用 Hook
   1. 不要在循环，条件或嵌套函数中调用 Hook。为什么？ React靠的是Hook调用的顺序，才知道哪个state对应哪个 `useState`。如果使用条件判断，会影响Hook的执行顺序。[官方文档解释](https://zh-hans.reactjs.org/docs/hooks-rules.html#explanation)
   2. 如果想使用条件判断，则只需将条件判断放置在 Hook 函数中即可。
2. 只在 React 函数中调用 Hook
   1. 在 React 的函数组件中调用 Hook
   2. 在自定义 Hook 中调用其他 Hook

### 自定义Hook

// TODO: 待完成

## 资料文章

[Hook 简介](https://zh-hans.reactjs.org/docs/hooks-intro.html)

[React Hooks Tutorial](https://www.robinwieruch.de/react-hooks)

[How to fetch data with React Hooks](https://www.robinwieruch.de/react-hooks-fetch-data)

[A Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/)