/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    const less = num1.length > num2.length ? num2 : num1;
    const large = num1.length > num2.length ? num1 : num2;

    let lessPos = less.length - 1;
    let largePos = large.length - 1;

    let minus = 0;
    let res = '';
    while (largePos >= 0) {
        let temp = 0;
        if (lessPos >= 0) {
            temp = parseInt(less[lessPos]) + parseInt(large[largePos]) + minus;
            lessPos--;
        } else {
            temp = parseInt(large[largePos]) + minus;
        }
        largePos--;
        minus = temp > 9 ? 1 : 0;
        res = (temp % 10) + res;
    }
    res = minus > 0 ? minus + res : res;
    return res;
};
// @lc code=end
