/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    // 双指针，算是辣鸡暴力法了
    const len = nums.length

    for (let left = 0; left < len - 1; left++) {
        for (let right = left + 1; right < len; right++) {
            if (nums[left] === nums[right]) return nums[left]
        }
    }
};
// @lc code=end

