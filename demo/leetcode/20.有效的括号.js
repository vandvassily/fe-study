/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  // 用栈按照顺序遍历
  // 遇到左括号，入栈；
  // 遇到右括号，栈弹出一个括号，进行匹配
  // 相同则继续遍历；否则返回false
  // 最后判断栈的大小为0，返回true；否则false
  let map = {
    '[': ']',
    '{': '}',
    '(': ')',
  }

  let stack = []

  for (let i = 0; i < s.length; i++) {
    if (map[s.charAt(i)]) {
      stack.push(s.charAt(i))
    } else {
      let temp = stack.pop()
      if (map[temp] !== s.charAt(i)) {
        return false
      }
    }
  }

  return stack.length === 0
}
// @lc code=end
