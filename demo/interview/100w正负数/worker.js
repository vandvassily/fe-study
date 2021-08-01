onmessage = function(e) {
    console.log('Worker: Message received from main script');

    const len = e.data
    this.postMessage(calc(createArray(len)))
};

/**
 * 生成整数数组
 * @param {number} num 数组长度
 * @returns {Array}
 */
 function createArray(num = 100) {
    const ret = [];
    for (let i = 0; i < num; i++) {
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
