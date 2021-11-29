/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const ans = [];
  backtracking(nums, 0, ans);

  return ans;
};

function backtracking(nums = [], level = 0, ans = []) {
  if (level === nums.length - 1) {
    ans.push(nums.slice(0));

    return;
  }

  for (let i = level; i < nums.length; i++) {
    [nums[i], nums[level]] = [nums[level], nums[i]];
    backtracking(nums, level + 1, ans);
    [nums[i], nums[level]] = [nums[level], nums[i]];
  }
}
// @lc code=end
