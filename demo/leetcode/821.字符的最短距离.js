/*
 * @lc app=leetcode.cn id=821 lang=javascript
 *
 * [821] 字符的最短距离
 */

// @lc code=start
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
    var target = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            target.push(i);
        }
    }

    var res = new Array(s.length).fill(s.length)
    for (let j = 0; j < s.length; j++) {
        for (let z = 0; z < target.length; z++) {
            res[j] = Math.min(res[j], Math.abs(j - target[z]))
        }
    }

    return res;
};
// @lc code=end

