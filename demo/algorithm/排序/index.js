let arr = [1, 4, 2, 10, 6, 9, 22, 11, 32, -1, 12, 12];
/**
 * 冒泡排序
 * @param {Array} array 需排序数组
 * @returns {Array} 排序后的结果
 */
function buddleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }

    return array;
}

console.log(buddleSort(arr));
