const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
let count = 0;
function MyPromise(executor) {
    let self = this;
    this.state = PENDING
    this.result = undefined
    this.reason = undefined;
    this.name = count;
    count++;

    // 成功回调的数组
    this.onResolvedCallbacks = []
    // 失败回调的数组
    this.onRejectedCallbacks = []

    var resolve = function (value) {
        if (self.state === PENDING) {
            self.state = FULFILLED
            self.result = value
            self.onResolvedCallbacks.forEach(item => {
                item(self.result)
            })
        }
    }
    var reject = function (reason) {
        if (self.state === PENDING) {
            self.state = REJECTED
            self.reason = reason
        }
    }


    try {
        executor && executor(resolve, reject)
    } catch (error) {
        reject(error)
    }
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
    var self = this;
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (v) => v;
    onRejected = typeof onRejected === 'function' ? onRejected : (err) => { throw err };
    // console.log(this)
    let promise2 = new MyPromise((resolve, reject) => {
        if (self.state === FULFILLED) {
            try {
                var x = onFulfilled(self.result)
                if (x instanceof Promise) { // 如果 onResolved 的返回值是一个 Promise 对象, 直接取它的结果做为 promise2 的结果
                    x.then(resolve, reject)
                }
                resolve(x) // 否则, 以它的返回值做为 promise2 的结果
            } catch (e) {
                reject(e) // 如果出错, 以捕获到的错误做为 promise2 的结果
            }
        }

        if (self.state === REJECTED) {
            try {
                var x = onRejected(self.reason)
                if (x instanceof Promise) {
                    x.then(resolve, reject)
                }
            } catch (e) {
                reject(e)
            }
        }

        if (self.state === PENDING) {
            self.onResolvedCallbacks.push((value) => {
                let x = onFulfilled(value);
                if (x instanceof MyPromise) {
                    x.then(resolve, reject)
                }
                else {
                    resolve(x)
                }
            })
            self.onRejectedCallbacks.push((reason) => {
                try {
                    var x = onRejected(reason)
                    if (x instanceof Promise) {
                        x.then(resolve, reject);
                    }
                    else {
                        reject(x);
                    }
                } catch (e) {
                    reject(e)
                }
            })
        }
    })

    return promise2
}

// function resolvePromise(promise2, x, resolve, reject) {
//     var then
//     var thenCalledOrThrow = false
//     if (promise2 === x) {
//         return reject(new TypeError('Chaining cycle detected for promise!'))
//     }

//     if (x instanceof MyPromise) {
//         if (x.state === 'pending') { //because x could resolved by a Promise Object
//             x.then(function (v) {
//                 resolvePromise(promise2, v, resolve, reject)
//             }, reject)
//         } else { //but if it is resolved, it will never resolved by a Promise Object but a static value;
//             x.then(resolve, reject)
//         }
//         return
//     }

//     if ((x !== null) && ((typeof x === 'object') || (typeof x === 'function'))) {
//         try {
//             then = x.then //because x.then could be a getter
//             if (typeof then === 'function') {
//                 then.call(x, function rs(y) {
//                     if (thenCalledOrThrow) return
//                     thenCalledOrThrow = true
//                     return resolvePromise(promise2, y, resolve, reject)
//                 }, function rj(r) {
//                     if (thenCalledOrThrow) return
//                     thenCalledOrThrow = true
//                     return reject(r)
//                 })
//             } else {
//                 resolve(x)
//             }
//         } catch (e) {
//             if (thenCalledOrThrow) return
//             thenCalledOrThrow = true
//             return reject(e)
//         }
//     } else {
//         resolve(x)
//     }

// }

// console.time('start')
// var p1 = new MyPromise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(3)
//     }, 1000)
// }).then((res) => {
//     console.log(res)
//     console.timeEnd('start')
//     return new MyPromise((resolve) => {
//         console.time('start2')
//         setTimeout(() => {
//             resolve(4)
//         }, 1000)
//     })
// }).then(res => {
//     console.log(res)
//     console.timeEnd('start2')
// })

console.time('start')
var p1 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(3)
    }, 1000)
}).then(res => {
    console.log(res)
}).then().then(res => {
    console.log(res)
})

// let p2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(3)
//     }, 1000)
// }).then(res => {
//     console.log(res)
// }).then(res => {
//     console.log(res)
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(2)
//         }, 2000);
//     })
// }).then(res => {
//     console.log(res)
// }).then(res => {
//     console.log(res)
// })