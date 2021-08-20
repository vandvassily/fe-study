/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  // t的length !== s的length，则直接返回false
  // 使用hashmap保存s中每个字符出现的次数
  // 遍历t中的每一个字符，如果在s的hashmap中出现，则减去1；否则直接返回false
  if (t.length !== s.length) return false;

  const sMap = {};
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    sMap[item] = sMap[item] ? sMap[item] + 1 : 1;
  }

  for (let j = 0; j < t.length; j++) {
    const item = t[j];
    if (sMap[item] > 0) {
      sMap[item] = sMap[item] - 1;
    } else {
      return false;
    }
  }

  return true;
};
// @lc code=end
