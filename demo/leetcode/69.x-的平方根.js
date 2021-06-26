/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x == 1) return 1;
    return half(0, x, x);
};

function half(left, right, target) {
    if (right - left <= 1) return left;
    const center = (left + right) >> 1;
    if (center * center <= target) {
        return half(center, right, target);
    } else {
        return half(left, center, target);
    }
}
// @lc code=end
