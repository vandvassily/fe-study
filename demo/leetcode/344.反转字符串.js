/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let temp;
    for (let i = 0; i < s.length / 2; i++) {
        temp = s[s.length - 1 - i];
        s[s.length - 1 - i] = s[i];
        s[i] = temp
    }
};

// @lc code=end

// 第一种
// var reverseString = function(s) {
//     s = s.reverse();
// };

// 第二种


