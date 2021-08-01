const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function MyPromise(executor) {
    var self = this;

    this.state = PENDING
    this.value = undefined;
    this.reason = undefined;

    this.onResolvedCallbacks = []
    this.onRejectedCallbacks = []


    function resolve(value) {
        if (self.state === PENDING) {
            self.state = FULFILLED
            self.value = value
            self.onResolvedCallbacks.forEach(fn => {
                return fn(value)
            })
        }
    }
    function reject(reason) {
        if (self.state === PENDING) {
            self.state = FULFILLED
            self.reason = reason
            self.onRejectedCallbacks.forEach(fn => {
                return fn(reason)
            })
        }
    }

    try {
        executor(resolve, reject)
    } catch (error) {
        reject(error)
    }
}

MyPromise.prototype.then = function (onResolved, onRejected) {
    var self = this

    var promise2

    onResolved = typeof onResolved === 'function' ? onResolved : function (value) {
        return value
    }
    onRejected = typeof onRejected === 'function' ? onRejected : function (reason) { throw reason }

    // 所以，我们需要在then里面执行onResolved或者onRejected，
    // 并根据返回值(标准中记为x)来确定promise2的结果，并且，
    // 如果onResolved/onRejected返回的是一个Promise，promise2将直接取这个Promise的结果：


    // 如果promise1(此处即为this/self)的状态已经确定并且是resolved，我们调用onResolved
    // 因为考虑到有可能throw，所以我们将其包在try/catch块里
    if (self.state === FULFILLED) {
        promise2 = new MyPromise((resolve, reject) => {
            setTimeout(() => {
                try {
                    let x = onResolved(self.value)
                    resolvePromise(promise2, x, resolve, reject)
                } catch (error) {
                    reject(error)
                }
            }, 0)
        })
    }

    if (self.state === REJECTED) {
        promise2 = new MyPromise((resolve, reject) => {
            setTimeout(() => {
                try {
                    let x = onRejected(self.reason)
                    resolvePromise(promise2, x, resolve, reject)
                } catch (error) {
                    reject(error)
                }
            }, 0)

        })
    }

    if (self.state === PENDING) {
        // 如果当前的Promise还处于pending状态，我们并不能确定调用onResolved还是onRejected，
        // 只能等到Promise的状态确定后，才能确实如何处理。
        // 所以我们需要把我们的**两种情况**的处理逻辑做为callback放入promise1(此处即this/self)的回调数组里
        // 逻辑本身跟第一个if块内的几乎一致，此处不做过多解释
        promise2 = new MyPromise((resolve, reject) => {
            self.onResolvedCallbacks.push((value) => {
                setTimeout(() => {
                    try {
                        var x = onResolved(self.value)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0);
            })
            self.onRejectedCallbacks.push((reason) => {
                setTimeout(() => {
                    try {
                        var x = onRejected(self.reason)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0);
            })
        })
    }

    return promise2
}

// resolvePromise函数根据x的值来决定promise2的状态
/*
resolvePromise函数即为根据x的值来决定promise2的状态的函数
也即标准中的[Promise Resolution Procedure](https://promisesaplus.com/#point-47)
x为`promise2 = promise1.then(onResolved, onRejected)`里`onResolved/onRejected`的返回值
`resolve`和`reject`实际上是`promise2`的`executor`的两个实参，因为很难挂在其它的地方，所以一并传进来。
相信各位一定可以对照标准把标准转换成代码，这里就只标出代码在标准中对应的位置，只在必要的地方做一些解释
*/
function resolvePromise(promise2, x, resolve, reject) {
    var then;
    var thenCalledOrThrow = false;
    if (promise2 === x) {
        return reject(new TypeError('Chaining cycle detected for promise!'))
    }

    // 如果x是pormise对象，要递归解出thenable
    if (x instanceof MyPromise) {
        // 如果x的状态还没有确定，那么它是有可能被一个thenable决定最终状态和值的
        // 所以这里需要做一下处理，而不能一概的以为它会被一个“正常”的值resolve
        if (x.state === PENDING) {
            x.then(function (value) {
                resolvePromise(promise2, value, resolve, reject)
            }, reject)
        }
        else {
            x.then(resolve, reject)
        }

        return
    }

    if ((x !== null) && ((typeof x === 'object') || (typeof x === 'function'))) { // 2.3.3
        try {

            // 2.3.3.1 因为x.then有可能是一个getter，这种情况下多次读取就有可能产生副作用
            // 即要判断它的类型，又要调用它，这就是两次读取
            then = x.then
            if (typeof then === 'function') { // 2.3.3.3
                then.call(x, function rs(y) { // 2.3.3.3.1
                    if (thenCalledOrThrow) return // 2.3.3.3.3 即这三处谁选执行就以谁的结果为准
                    thenCalledOrThrow = true
                    return resolvePromise(promise2, y, resolve, reject) // 2.3.3.3.1
                }, function rj(r) { // 2.3.3.3.2
                    if (thenCalledOrThrow) return // 2.3.3.3.3 即这三处谁选执行就以谁的结果为准
                    thenCalledOrThrow = true
                    return reject(r)
                })
            } else { // 2.3.3.4
                resolve(x)
            }
        } catch (e) { // 2.3.3.2
            if (thenCalledOrThrow) return // 2.3.3.3.3 即这三处谁选执行就以谁的结果为准
            thenCalledOrThrow = true
            return reject(e)
        }
    } else { // 2.3.4
        resolve(x)
    }
}

MyPromise.resolve = function (value) {
    var promise = new MyPromise((resolve, reject) => {
        resolvePromise(promise, value, resolve, reject)
    })

    return promise
}

MyPromise.all = function (promises) {
    return new MyPromise((resolve, reject) => {
        var resolvedCount = 0
        var promiseNum = promises.length
        var resolvedValues = new Array(promiseNum)

        for (let i = 0; i < promiseNum; i++) {
            MyPromise.resolve(promises[i]).then(res => {
                resolvedCount++;
                resolvedValues[i] = res

                if (promiseNum === resolvedCount) {
                    resolve(resolvedValues)
                }
            }, function (reason) {
                reject(reason)
            })
        }
    })
}

MyPromise.race = function (promises) {
    return new MyPromise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            MyPromise.resolve(promises[i]).then(res => {
                resolve(res)
            }, function (reason) {
                reject(reason)
            })
        }
    })
}

var p1 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(3)
    }, 1000)
}).then(res => {
    console.log(res)
    return 1
})
    .then(res => {
        console.log(res)
        return 2
    }).then(4).then()
    .then(res => {
        console.log(res)
    }).then(4).then().then(res => {
        console.log(res)
    })


function timer(time, val) {
    return new MyPromise((resolve, reject) => {
        console.log(val)
        setTimeout(() => {
            resolve(val)
        }, time);
    })
}

var promises = [
    timer(1200, 'xiaoming'),
    timer(3000, 'xiaohong'),
    timer(2000, 'xiaohuang'),
    timer(1500, 'xiaosan')]

// MyPromise.all(promises).then(arr => {
//     console.log(arr)
// })
MyPromise.race(promises).then(arr => {
    console.log(arr)
})

function test() {
    return MyPromise.resolve('I made it')
}

let a = test()
console.log(a);
