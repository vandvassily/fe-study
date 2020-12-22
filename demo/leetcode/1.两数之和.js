/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {};
    let currentValue;
    let otherValue;
    for (let i = 0; i < nums.length; i++) {
        currentValue = nums[i];
        otherValue = target - currentValue
        if (map[otherValue] && map[otherValue] != i + 1) {
            return [map[otherValue] - 1, i]
        }
        else {
            map[currentValue] = i + 1;
        }
        
    }
};
// @lc code=end

