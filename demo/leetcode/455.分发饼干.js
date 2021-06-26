/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    const gLen = g.length;
    const sLen = s.length;

    let left = 0;
    let right = 0;

    let count = 0;
    while (left < gLen && right < sLen) {
        if (s[right] >= g[left]) {
            count++;
            left++;
        }
        right++;
    }
    return count;
};
// @lc code=end
