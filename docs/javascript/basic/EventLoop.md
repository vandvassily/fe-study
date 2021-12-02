# EventLoop 事件循环

## 同步任务

## 异步任务

当前执行栈执行完毕时,会立刻先处理所有微任务队列中的事件，然后再去宏任务队列中取出一个事件。同一次事件循环中，微任务永远在宏任务之前执行。

:::tip

1. 代码执行时，维护一个宏任务队列和微任务队列

2. async/await，不用考虑会影响到异步函数外的执行
:::

### 微任务 micro task

1. new Promise()
2. new MutaionObserver()

### 宏任务 macro task

1. setInterval()
2. setTimeout()
3. setImmediate() // IE才支持

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

```js
new Promise((resolve,reject)=>{
    console.log("promise1")
    resolve()
}).then(()=>{
    console.log("then11")
    new Promise((resolve,reject)=>{
        console.log("promise2")
        resolve()
    }).then(()=>{
        console.log("then21")
    }).then(()=>{
        console.log("then23")
    })
}).then(()=>{
    console.log("then12")
})
new Promise((resolve,reject)=>{
    console.log("promise3")
    resolve()
}).then(()=>{
    console.log("then31")
})

// promise1
// promise3
// then11
// promise2
// then31
// then21
// then12
// then23
```

```js
async function async1() {
    console.log("async1 start");
    await  async2();
    console.log("async1 end");
}
async  function async2() {
    console.log( 'async2');
}
console.log("script start");
setTimeout(function () {
    console.log("settimeout");
});
async1()
new Promise(function (resolve) {
    console.log("promise1");
    resolve();
}).then(function () {
    console.log("promise2");
});
setImmediate(()=>{
    console.log("setImmediate")
})
process.nextTick(()=>{
    console.log("process")
})
console.log('script end');
// script start
// async1 start
// async2
// promise1
// script end 
// process
// async1 end
// promise2
// settimeout
// setImmediate
```


## 参考资料

[Eventloop不可怕，可怕的是遇上Promise](https://juejin.im/post/5c9a43175188252d876e5903#heading-6)
[前端中的事件循环eventloop机制](https://juejin.im/post/5e0adffbe51d4541013f0bf4)