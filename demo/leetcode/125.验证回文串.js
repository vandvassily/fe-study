/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s = '') {
  // 双指针，左指针从0开始，遇到非数字和字母，则跳过
  // 右指针从最后1位开始，向左移动，遇到非数字和字母，则跳过
  // 比较两个指针的值，如果相同，则互相移动1位；否则，则直接返回false
  let left = 0;
  let right = s.length - 1;

  let reg = new RegExp(/[a-zA-Z0-9]/);

  while (left < right) {
    while (!reg.test(s[left]) && left < right) {
      left++;
    }

    while (!reg.test(s[right]) && left < right) {
      right--;
    }

    if (s[left].toLowerCase() === s[right].toLowerCase()) {
      left++;
      right--;
    } else {
      return false;
    }
  }

  return true;
};

// @lc code=end
