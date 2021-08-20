/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const visited = {};
  for (let leftIndex = 0; leftIndex < s.length; leftIndex++) {
    const left = s[leftIndex];
    if (visited[left]) {
      continue;
    } else {
      visited[left] = true;
    }
    let flag = false;
    for (let rightIndex = leftIndex + 1; rightIndex < s.length; rightIndex++) {
      const right = s[rightIndex];
      if (left === right) {
        flag = true;
        break;
      }
    }
    if (!flag) return leftIndex;
  }
  return -1;
};
// @lc code=end
