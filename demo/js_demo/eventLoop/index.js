// 事件循环
setTimeout(function () {
    console.log(1);
}, 0);

new Promise(function (resolve, reject) {
    console.log(2);
    resolve(3);
}).then(function (val) {
    console.log(val);


    new Promise((resolve, reject) => {
        resolve(5)
    }).then((val) => {
        console.log(val);
    })

    setTimeout(function () {
        console.log(4);
    }, 0)


});

// 1. 定时器1放到宏任务中
// 2. promise中同步代码执行，打印2
// 3. 微任务添加
// 4. 没有同步任务，执行微任务
// 5. 打印3
// 6. 微任务添加，打印5
// 7. 定时器2放到宏任务中
// 8. 没有同步任务，执行微任务
// 9. 打印5
// 10. 没有同步任务，没有微任务
// 11. 执行宏任务 输出1 4