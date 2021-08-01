/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  s = s.trim()
  let arr = s.match(/\S+/gi)

  for (let i = 0; i < arr.length / 2; i++) {
    ;[arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]]
  }

  return arr.join(' ')
}
// @lc code=end
