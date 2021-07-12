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
var findKthLargest = function(nums, k) {
    if (nums.length === 1) return nums[0];
    return quick_sort_c(nums, 0, nums.length - 1, nums.length - k);
};

function quick_sort_c(arr, left, right, k) {
    const p = randomPartition(arr, left, right);
    if (k === p) {
        return arr[p];
    } else {
        return p < k
            ? quick_sort_c(arr, p + 1, right, k)
            : quick_sort_c(arr, left, p - 1, k);
    }
}

function randomPartition(arr, left, right) {
    const i = parseInt(Math.random() * (right - left)) + 1;
    console.log(i + ' ' + right);
    [arr[i], arr[right]] = [arr[right], arr[i]];
    partition(arr, left, right);
}

function partition(arr, left, right) {
    let pivot = left;
    let index = pivot + 1;
    for (let i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            [arr[i], arr[index]] = [arr[index], arr[i]];
            index++;
        }
    }
    [arr[pivot], arr[index - 1]] = [arr[index - 1], arr[pivot]];
    return index - 1;
}

// @lc code=end
