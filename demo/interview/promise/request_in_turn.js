// 页面上有三个按钮，分别为 A、B、C，点击各个按钮都会发送异步请求且互不影响，每次请求回来的数据都为按钮的名字。

// 请实现当用户依次点击 A、B、C、A、C、B 的时候，最终获取的数据为 ABCACB。

class MessageQueue {
    queue = [];
    promise = Promise.resolve();
    constructor() {}

    add(msg) {
        this.queue.push(msg);
    }

    run() {
        if (this.queue.length > 0) {
            this.promise = this.queue.shift().then((res) => {
                console.log(res)
            });
        }
    }
}

let mq = new MessageQueue();

['A', 'B', 'C'].forEach((id) => {
    document.getElementById(id).addEventListener('click', (e) => {
        mq.add(
            new Promise((resolve) => {
                setTimeout(() => {
                    resolve(id);
                }, Math.random() * 1000);
            }).then(res => {
                mq.run()
            })
        );
    });
});
// let startTime = new Date().getTime();
// let promise = Promise.resolve();

// function click(btnName) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(btnName);
//         }, Math.random() * 2000);
//     });
// }

// ['A', 'B', 'C'].forEach((id) => {
//     document.getElementById(id).addEventListener('click', (e) => {
//         var clickPromise = click(id);
//         promise = promise
//             .then(() => {
//                 return clickPromise;
//             })
//             .then(function (res) {
//                 console.log(res);
//                 console.log(new Date().getTime() - startTime);
//             });
//     });
// });

// class Queue {
//     promise = Promise.resolve();

//     excute(promise) {
//         this.promise = this.promise.then(() => promise);
//         return this.promise;
//     }
// }

// const queue = new Queue();

// const delay = (params) => {
//     const time = Math.floor(Math.random() * 5);
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(params);
//         }, time * 3000);
//     });
// };

// const handleClick = async (name) => {
//     const res = await queue.excute(delay(name));
//     console.log(res);
// };

// ['A', 'B', 'C'].forEach((id) => {
//     document.getElementById(id).addEventListener('click', (e) => {
//         handleClick(id);
//     });
// });
