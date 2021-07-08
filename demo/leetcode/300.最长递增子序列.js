/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */
// 动态规划，转移方程以DP[i]结尾的最长递增子序列
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    if (nums.length === 1) return 1;
    const dp = [1];
    let max = 1;

    for (let i = 1; i < nums.length; i++) {
        dp[i] = 1;
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        max = Math.max(max, dp[i])
    }
    return max;
};
// @lc code=end

