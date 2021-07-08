function Promise(executor) {
    var self = this;
    self.status = 'pending'; // promise当前的状态
    self.data = undefined; // promise的值

    self.onResolvedCallback = [];
    self.onRejectedCallback = [];

    function resolve(value) {
        if (self.status === 'pending') {
            self.status = 'resolved';
            self.data = value;
            for (var i = 0; index < self.onResolvedCallback.length; i++) {
                const element = array[index];
                self.onResolvedCallback[i](value);
            }
        }
    }

    function reject(value) {
        if (self.status === 'pending') {
            self.status = 'rejected';
            self.data = reason;
            for (var i = 0; i < self.onRejectedCallback.length; i++) {
                self.onRejectedCallback[i](reason);
            }
        }
    }

    try {
        executor(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

Promise.prototype.then = function (onResolved, onRejected) {
    var self = this;
    var promise2;

    onResolved =
        typeof onResolved === 'function' ? onResolved : function (v) {};
    onRejected =
        typeof onRejected === 'function' ? onRejected : function (r) {};

    if (self.status === 'resolved') {
        return (promise2 = new Promise(function (resolve, reject) {
            try {
                var x = onResolved(self.data);
                if (x instanceof Promise) {
                    // 如果onResolved的返回值是一个Promise对象，直接取它的结果做为promise2的结果
                    x.then(resolve, reject);
                }
                resolve(x); // 否则，以它的返回值做为promise2的结果
            } catch (e) {
                reject(e); // 如果出错，以捕获到的错误做为promise2的结果
            }
        }));
    }

    if (self.status === 'rejected') {
        return (promise2 = new Promise(function (resolve, reject) {
            try {
                var x = onRejected(self.data);
                if (x instanceof Promise) {
                    x.then(resolve, reject);
                }
            } catch (e) {
                reject(e);
            }
        }));
    }

    if (self.status === 'pending') {
        // 如果当前的Promise还处于pending状态，我们并不能确定调用onResolved还是onRejected，
        // 只能等到Promise的状态确定后，才能确实如何处理。
        // 所以我们需要把我们的**两种情况**的处理逻辑做为callback放入promise1(此处即this/self)的回调数组里
        // 逻辑本身跟第一个if块内的几乎一致，此处不做过多解释
        return (promise2 = new Promise(function (resolve, reject) {
            self.onResolvedCallback.push(function (value) {
                try {
                    var x = onResolved(self.data);
                    if (x instanceof Promise) {
                        x.then(resolve, reject);
                    }
                } catch (e) {
                    reject(e);
                }
            });

            self.onRejectedCallback.push(function (reason) {
                try {
                    var x = onRejected(self.data);
                    if (x instanceof Promise) {
                        x.then(resolve, reject);
                    }
                } catch (e) {
                    reject(e);
                }
            });
        }));
    }
};

// 为了下文方便，我们顺便实现一个catch方法
Promise.prototype.catch = function (onRejected) {
    return this.then(null, onRejected)
}
