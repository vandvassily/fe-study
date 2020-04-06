# EventLoop 事件循环

## 同步任务

## 异步任务

当当前执行栈执行完毕时会立刻先处理所有微任务队列中的事件，然后再去宏任务队列中取出一个事件。同一次事件循环中，微任务永远在宏任务之前执行。

### 微任务 micro task

1. new Promise()
2. new MutaionObserver()

### 宏任务 macro task

1. setInterval()
2. setTimeout()

```javascript
setTimeout(function () {
    console.log(1);
});

new Promise(function (resolve, reject) {
    console.log(2);
    resolve(3);
}).then(function (val) {
    console.log(val);
});
```
