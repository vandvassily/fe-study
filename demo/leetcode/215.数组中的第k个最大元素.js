/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    // quickSort(nums);
    return quickSortC(nums, 0, nums.length - 1, nums.length - k)
};

// /**
// * 快速排序
// * @param {Array} arr 
// */
// function quickSort(arr) {
//     quickSortC(arr, 0, arr.length - 1)
//     return arr;
// }

function quickSortC(arr, left, right, keyIndex) {
    debugger
    if (left >= right) return;

    const pivot = partition(arr, left, right);
    if (pivot === keyIndex) {
        return arr[keyIndex]
    }
    else {
        return pivot > keyIndex ? quickSortC(arr, left, pivot - 1, keyIndex) : quickSortC(arr, pivot + 1, right, keyIndex)
    }
}

function partition(arr, left, right) {
    const pivot = left
    let index = left + 1;

    for (let i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            [arr[i], arr[index]] = [arr[index], arr[i]]
            index++;
        }
    };

    [arr[index - 1], arr[pivot]] = [arr[pivot], arr[index - 1]]

    return index - 1
}

// @lc code=end

