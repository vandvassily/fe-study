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
var climbStairs = function (n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    let prev = 1;
    let next = 2;
    let len = n + 1;
    for (let i = 3; i < len; i++) {
        let cur = prev + next;
        prev = next;
        next = cur;
    }

    return next;
};

/**
 * @param {number} n
 * @return {number}
 */
// const map = {};
// var climbStairs = function (n) {
//     if (map[n]) return map[n];
//     if (n === 1) return 1;
//     if (n === 2) return 2;

//     map[n] = climbStairs(n - 1) + climbStairs(n - 2);

//     return map[n];
// };

// @lc code=end
