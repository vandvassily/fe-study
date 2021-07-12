const requestMap = {};
let requestId = 0;

function timer(options = {}) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                result: options.res,
                id: requestId++,
            });
        }, options.time);
    });
}

async function request(options) {
    const optStr = JSON.stringify(options);
    if (requestMap[optStr] && requestMap[optStr].status === 'pending') {
        requestMap[optStr].callbacks.push(options.callback);
        return;
    } else {
        requestMap[optStr] = {
            status: 'pending',
            callbacks: [options.callback],
        };
    }
    await timer(options).then((res) => {
        for (let i = 0; i < requestMap[optStr].callbacks.length; i++) {
            const item = requestMap[optStr].callbacks[i];
            const fn = item;
            fn(res);
        }
        delete requestMap[optStr];
    });
}

request({
    res: 1,
    time: 3000,
    callback: function(res) {
        console.log(res);
    },
});
request({
    res: 1,
    time: 3000,
    callback: function(res) {
        console.log(res);
    },
});
request({
    res: 1,
    time: 3000,
    callback: function(res) {
        console.log(res);
    },
});
request({
    res: 2,
    time: 3000,
    callback: function(res) {
        console.log(res);
    },
});
request({
    res: 2,
    time: 3000,
    callback: function(res) {
        console.log(res);
    },
});
request({
    res: 3,
    time: 3000,
    callback: function(res) {
        console.log(res);
    },
});
