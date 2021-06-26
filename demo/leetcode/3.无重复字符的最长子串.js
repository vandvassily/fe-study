/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let res = 0;
    let hashMap = new Map();
    let left = 0;
    let right = 0;
    for (; right < s.length; right++) {
        const rightVal = s[right];
        if (hashMap.has(rightVal) && hashMap.get(rightVal) >= left) {
            left = hashMap.get(rightVal) + 1;
        }
        res = Math.max(res, right - left + 1);
        hashMap.set(rightVal, right);
    }
    return res;
};
// @lc code=end
