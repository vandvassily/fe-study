let arr = [1, 4, 2, 10, 6, 9, 22, 11, 32, -1, 12, 12];
// let arr2 = [];
// for (let i = 0; i < 100000; i++) {
//     arr2.push(Math.floor(Math.random() * 1000))
// }
console.log(arr)
/**
 * 冒泡排序
 * @param {Array} array 需排序数组
 * @returns {Array} 排序后的结果
 */
function buddleSort(array) {
    let start = new Date().getTime();
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }

    console.log(`耗时${new Date().getTime() - start} ms`)

    return array;
}

// console.log(buddleSort(arr2));

/**
 * 插入排序
 * @param {Array} array 需排序数组
 * @returns {Array} 排序后的结果
 */
function insertSort(array) {
    let start = new Date().getTime();
    for (let i = 1; i < array.length; i++) {
        let value = array[i];
        let j = i - 1;
        for (; j >= 0; j--) {
            if(array[j] > value) {
                array[j + 1] = array[j]
            }
            else {
                break
            }
        }
        array[j + 1] = value
    }
    console.log(`耗时${new Date().getTime() - start} ms`)
    return array;
}

// console.log(insertSort(arr2));
/**
 * 选择排序
 * @param {Array} array 需排序数组
 * @returns {Array} 排序后的结果
 */
function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        let j = i;
        for (; j < array.length; j++) {
            if(array[minIndex] > array[j]) {
                minIndex = j
            }
        }
        let temp = array[minIndex];
        array[minIndex] = array[i]
        array[i] = temp;
        
    }
    return array
}

// console.log(selectionSort(arr));

// 归并排序

function mergeSort(arr) {
    if(arr.length < 2) return arr;
    let center = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, center));
    let right = mergeSort(arr.slice(center));
    return merge(left, right);
}

/**
 * 
 * @param {Array} left 左数组
 * @param {Array} right 右数组
 */
function merge(left, right) {
    let res = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            res.push(left[i]);
            i++;
        }
        else {
            res.push(right[i]);
            j++;
        }
    }

    if(i < left.length) {
        res.push(...left.slice(i))
    }

    if(j < right.length) {
        res.push(...right.slice(j));
    }

    return res
}

console.log(mergeSort(arr));