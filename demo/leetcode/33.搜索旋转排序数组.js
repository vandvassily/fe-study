/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let len = nums.length;
    if (len === 1) return nums[0] === target ? 0 : -1;

    let left = 0;
    let right = len - 1;

    while (left <= right) {
        let mid = (left + right) >> 1;

        if (nums[mid] === target) {
            return mid;
        }
        if (nums[0] <= nums[mid]) {
            if (nums[0] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[len - 1]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
};

// 暴力法
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var search = function (nums, target) {
//     let res = -1;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === target) {
//             return i;
//         }
//     }

//     return res;
// };
// @lc code=end
