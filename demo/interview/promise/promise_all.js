// 异步请求通过 Promise.all 处理，怎么让其中失败的所有请求重试。

// Promise.all([A, B, C, D])
// 4 个请求完成后发现 AD 请求失败了，如果让 AD 请求重试

function request(name, count = 0) {
    return new Promise((resolve, reject) => {
        const isSuccess = Math.random() > 0.5;
        console.log(`接口${name}: ${isSuccess}`);
        setTimeout(() => {
            isSuccess > 0.5 ? resolve(name) : reject(name);
        }, Math.random() * 1000);
    }).catch((err) => {
        count++;

        if (count > 2) {
            return Promise.reject(`后端大爷${name}接口写的666`);
        }
        return request(name, count);
    });
}

let queue = [request('A'), request('B'), request('C'), request('D')];

Promise.all(queue)
    .then((arr) => {
        console.log(arr);
    })
    .catch((err) => {
        console.log(err);
    });
