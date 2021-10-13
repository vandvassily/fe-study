# setState 知识点

## setState 到底是同步还是异步？

面试题例子

```js
class StateDemo extends React.Component {
  state = {
    count: 0
  };

  componentDidMount() {
    this.func();
  }

  func = () => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);

    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);

    setTimeout(() => {
      this.setState({ count: this.state.count + 1 });
      console.log(`setTimeout console: ${this.state.count}`);

      this.setState({ count: this.state.count + 1 });
      console.log(`setTimeout console: ${this.state.count}`);
    }, 0);

    Promise.resolve().then(() => {
      this.setState({ count: this.state.count + 1 });
      console.log(`promise.resolve console: ${this.state.count}`);
    });
  };

  handleClick = () => {
    this.func();
  };

  render() {
    return (
      <>
        <button onClick={this.handleClick}>click to increase</button>
        <div>clicked counts: {this.state.count}</div>
      </>
    );
  }
}
// 0
// 0
// promise.resolve console: 2 
// setTimeout console: 3 
// setTimeout console: 4 
```

## 参考文章

[你真的理解setState吗？](https://juejin.cn/post/6844903636749778958)