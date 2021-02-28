/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    if(nums.length < 1) return 1;
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = true
    }

    for (let y = 1; y <= nums.length + 1; y++) {
        if(map[y] !== true) {
            return y
        }
    }
};
// @lc code=end

