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
var maxSubArray = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length == 1) return nums[0];
    let dp = [0, nums[0]];
    let maxValue = nums[0];
    for (let i = 2; i <= nums.length; i++) {
        if (dp[i - 1] > 0) {
            dp[i] = dp[i - 1] + nums[i - 1];
        } else {
            dp[i] = nums[i - 1];
        }
        maxValue = Math.max(dp[i], maxValue);
    }

    return maxValue;
};
// @lc code=end
