// 请实现 Promise.all

Promise.all2 = function (promises) {
    if (!Array.isArray(promises)) {
        throw new Error('all 中必须是数组')
    }

    return new Promise((resolve, reject) => {
        let resolvedCount = 0;
        const resolvedValues = new Array(promises.length)
        const promisesNum = promises.length

        for (let i = 0; i < promises.length; i++) {

            Promise.resolve(promises[i]).then(res => {
                resolvedCount++;
                resolvedValues[i] = res

                if (resolvedCount === promisesNum) {
                    resolve(resolvedValues)
                }
            }, reason => {
                reject(reason)
            })

        }
    })
}

function timer(time, val) {
    return new Promise((resolve, reject) => {
        console.time(val)
        setTimeout(() => {
            console.timeEnd(val)
            resolve(val)
        }, time);
    })
}

var promises = [
    timer(1200, 'xiaoming'),
    timer(3000, 'xiaohong'),
    timer(2000, 'xiaohuang'),
    timer(1500, 'xiaosan'),
    3]

console.time('all')
let res = Promise.all2(promises);

res.then(arr => {
    console.timeEnd('all')
    console.log(arr)
})

// xiaoming: 1202.260986328125 ms
// xiaosan: 1501.62109375 ms
// xiaohuang: 2008.06005859375 ms
// xiaohong: 3000.2119140625 ms
// all: 3001.406982421875 ms
// ["xiaoming", "xiaohong", "xiaohuang", "xiaosan", 3]