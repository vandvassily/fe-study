/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    // 不新增额外空间，意思就是原地hash，使用nums这个数组保存hash

};

// var findDuplicates = function (nums) {
//     // 如果考虑使用额外空间，那就使用hashmap去处理
//     const map = { };
//     const ans = [];
//     for (let i = 0; i < nums.length; i++) {
//         const key = nums[i];
//         if (map[key]) {
//             ans.push(key)
//         }
//         else {
//             map[key] = true;
//         }
//     }

//     return ans;
// };
// @lc code=end

