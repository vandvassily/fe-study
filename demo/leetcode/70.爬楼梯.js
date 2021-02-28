/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function(n, a1 = 1, a2 = 1) {
  if (n === 1 || n === 0) return a1
  return climbStairs(n - 1, a1 + a2, a1)
}
// @lc code=end
