// promise实现

function Promise2(executor) {
    let self = this
    self.state = 'pending'

    self.value = undefined
    self.reason = undefined

    self.resolveCallbacks = []
    self.rejectCallbacks = []

    function resolve(value) {
        self.value = value
        self.state = 'fulfilled'
        self.rejectCallbacks.forEach(fn => fn())
    }

    function reject(reason) {
        self.reason = reason
        self.state = 'rejected'
        self.rejectCallbacks.forEach(fn => fn())
    }

    executor(resolve, reject)
}

Promise2.prototype.then = function (onFulfilled, onRejected) {
    console.log('then ')
    var self = this

    if (this.state === 'pending') {

        //把回调方法塞进队列中
        self.resolveCallbacks.push(() => {
            onFulfilled(self.value)
        })
        self.rejectCallbacks.push(() => {
            onRejected(self.reason)
        })
    }

    if (this.state === 'fulfilled') {
        onFulfilled(this.value)
    }

    if (this.state === 'rejected') {
        onRejected(this.reason)
    }

}

new Promise2((resolve, reject) => {
    if (Math.random() > 0.5) {
        resolve(2)
    }
    else {
        reject('错啦')
    }
}).then(res => {
    console.log(res)
}, err => {
    console.log(err)
})