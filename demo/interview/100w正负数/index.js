/**
 * 生成整数数组
 * @param {number} num 数组长度
 * @returns {Array}
 */
function createArray(num = 100) {
    const ret = [];
    for (let i = 0; i < 1000 * 1000; i++) {
        ret.push(parseInt(Math.random() * (Math.random() < 0.5 ? -100 : 100)));
    }

    return ret;
}

/**
 * 移除数组内的负数
 * @param {Array} dataList 整数数组，包含正负整数
 * @returns
 */
function calc(dataList = []) {
    const ret = [];
    for (let i = 0; i < dataList.length; i++) {
        if (dataList[i] >= 0) {
            ret.push(dataList[i]);
        }
    }

    return ret;
}

const initStart = new Date().getTime();
const totalData = createArray(1000 * 1000);
const initTime = new Date().getTime() - initStart;
console.log(`生成时间: ${initTime}`);

const initCalc = new Date().getTime();
const calcRes = calc(totalData);
const calcTime = new Date().getTime() - initCalc;
console.log(`计算时间: ${calcTime}`);
console.log(`总共耗时: ${calcTime + initTime}`);
console.log([].slice.call(calcRes, 0, 100));

if (window.Worker) {
    const myWorker = new Worker('worker.js');
    const myWorker2 = new Worker('worker.js');
    let ret = [];

    myWorker.postMessage(500 * 1000);
    myWorker2.postMessage(500 * 1000);

    const initTime = new Date().getTime();
    myWorker.onmessage = function(e) {
        console.log(`总共耗时: ${new Date().getTime() - initTime}`);
        ret = ret.concat(e.data);
        console.log(ret.length);
        myWorker.terminate()
    };
    myWorker2.onmessage = function(e) {
        console.log(`总共耗时: ${new Date().getTime() - initTime}`);
        ret = ret.concat(e.data);
        console.log(ret.length);
        myWorker2.terminate()
    };
} else {
    console.log("Your browser doesn't support web workers.");
}
