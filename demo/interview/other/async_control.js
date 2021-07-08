// 异步控制
// https://mp.weixin.qq.com/s/_cRGIFF29oEaDqSygWH3aQ

// es7实现
async function asyncPool(poolLimit, array, iteratorFn) {
    const ret = []; // 存储所有的异步任务
    const executing = []; // 存储正在执行的异步任务
    for (const item of array) {
        // 调用iteratorFn函数创建异步任务
        const p = Promise.resolve().then(() => iteratorFn(item, array));
        ret.push(p); // 保存新的异步任务

        // 当poolLimit值小于或等于总任务个数时，进行并发控制
        if (poolLimit <= array.length) {
            // 当任务完成后，从正在执行的任务数组中移除已完成的任务
            const e = p.then(() => executing.splice(executing.indexOf(e), 1));
            executing.push(e); // 保存正在执行的异步任务
            if (executing.length >= poolLimit) {
                await Promise.race(executing); // 等待较快的任务执行完成
            }
        }
    }
    return Promise.all(ret);
}


// es6实现
// function asyncPool(poolLimit, array, iteratorFn) {
//     let i = 0;
//     const ret = []; // 存储所有的异步任务
//     const executing = []; // 存储正在执行的异步任务
//     debugger
//     const enqueue = function () {
//         if (i === array.length) {
//             return Promise.resolve();
//         }
//         const item = array[i++]; // 获取新的任务项
//         const p = Promise.resolve().then(() => iteratorFn(item, array));
//         ret.push(p);

//         let r = Promise.resolve();

//         // 当poolLimit值小于或等于总任务个数时，进行并发控制
//         if (poolLimit <= array.length) {
//             // 当任务完成后，从正在执行的任务数组中移除已完成的任务
//             const e = p.then(() => executing.splice(executing.indexOf(e), 1));
//             executing.push(e);
//             if (executing.length >= poolLimit) {
//                 r = Promise.race(executing);
//             }
//         }

//         // 正在执行任务列表 中较快的任务执行完成之后，才会从array数组中获取新的待办任务
//         return r.then(() => enqueue());
//     };
//     console.log(ret)
//     return enqueue().then(() => Promise.all(ret));
// }

function timer(timeout) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(timeout)
        }, timeout);
    })
}

console.time('time')
asyncPool(2, [2000, 1000, 1500, 3000], timer).then(arr => {
    console.timeEnd('time')
    console.log(arr)
})


Promise.all2 = function (promises) {
    // 不是数组
    if (!Array.isArray(promises)) throw new Error('不是数组');

    // 返回一个新的promise
    return new Promise((resolve, reject) => {
        const len = promises.length;
        let resolvedNum = 0;
        const resolvedArray = new Array(len);

        for (let i = 0; i < len; i++) {
            Promise.resolve(promises[i]).then(res => {
                resolvedArray[i] = res;
                resolvedNum++;

                if (resolvedNum === len) {
                    resolve(resolvedArray)
                }
            }, err => {
                reject(err)
            })
        }
    })
}

Promise.race2 = function (promises) {
    // 不是数组
    if (!Array.isArray(promises)) throw new Error('不是数组');

    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i]).then(res => {
                resolve(res)
            }, err => {
                reject(err)
            })
        }
    })
}