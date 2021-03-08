/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */
// @lc code=start
const map = {};
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (map[n]) return map[n];
    if (n === 1) return 1;
    if (n === 2) return 2;

    map[n] = climbStairs(n - 1) + climbStairs(n - 2);

    return map[n];
};

// @lc code=end
