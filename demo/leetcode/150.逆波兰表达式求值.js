/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  let stack = []
  let map = {
    '+': true,
    '-': true,
    '*': true,
    '/': true,
  }

  for (let i = 0; i < tokens.length; i++) {
    const value = tokens[i]
    if (!map[value]) {
      stack.push(value)
    } else {
      let b = stack.pop()
      let a = stack.pop()
      stack.push(calc(a, b, value))
    }
  }

  return stack[0]
}

function calc(a, b, c) {
  if (c === '+') {
    return parseInt(a) + parseInt(b)
  } else if (c === '-') {
    return a - b
  } else if (c === '*') {
    return a * b
  } else if (c === '/') {
    return parseInt(a / b)
  }
}
// @lc code=end
