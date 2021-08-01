/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if (nums.length === 1) return nums[0];
    let prev = nums[0];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        prev = Math.max(prev + nums[i], nums[i]);
        max = Math.max(max, prev);
    }

    return max;
};
// @lc code=end
