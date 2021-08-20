/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x = 12) {
  // 思路：x的字符串形式，反转后比较极限大小
  const res = parseInt(x
    .toString()
    .split('')
    .reverse()
    .join(''));
  if (res > Math.pow(2, 31)) return 0;

  return (x > 0 ? 1 : -1) * res;
};
// @lc code=end
