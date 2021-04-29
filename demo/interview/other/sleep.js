// 如何实现 sleep 函数
// 需要大家实现一个 sleep 函数，可以卡住之后的代码执行。

// 真sleep，手动滑稽
function sleep(time) {
    const start = new Date().getTime();
    do {
    } while (new Date().getTime() - start <= time);
}

console.log('sleep1 start')
console.time('time1');
sleep(2000);
console.log('sleep1 end');
console.timeEnd('time1');

// async await
function sleep2(time) {
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve();
        }, time);
    })
}

async function handle() {
    console.log('start')
    console.time('time');
    await sleep2(2000);
    console.log('end');
    console.timeEnd('time');
}

handle()
console.log('start2');

// 回调函数
function sleep3(time, fn) {
    setTimeout(() => {
        fn && fn()
    }, time);
}

console.log('sleep3 start')
console.time('time3');
sleep3(2000, () =>{
    console.log('sleep3 end');
    console.timeEnd('time3');
});