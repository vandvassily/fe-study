/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let left = 0;
    let right = 0;
    let ret = [];
    while (left < nums.length) {
        if (nums[right] + 1 === nums[right + 1]) {
            right++;
        } else {
            if (right === left) {
                ret.push(`${nums[left]}`);
            } else {
                ret.push(`${nums[left]}->${nums[right]}`);
            }
            left = right = right + 1;
        }
    }
    return ret;
};
// @lc code=end
