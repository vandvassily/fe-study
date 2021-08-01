/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    nums = nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length / 2)];
};

// hashMap方法
// var majorityElement = function (nums) {
//     let map = {};
//     let max;
//     for (let i = 0; i < nums.length; i++) {
//         const value = nums[i];
//         if (!map[value]) {
//             map[value] = 1;
//         } else {
//             map[value] += 1;
//         }

//         if (map[value] > nums.length / 2) {
//             max = value;
//             return max;
//         }
//     }
// };

// 排序法
// @lc code=end
