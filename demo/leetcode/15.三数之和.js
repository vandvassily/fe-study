/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let result = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) {
            break;
        }

        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1,
            right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else if (sum > 0) {
                right--;
            }
        }
    }

    return result;
};

// 时间复杂度太高，n3，导致超时
// var threeSum = function (nums) {
//     let sortedArray = nums.sort((a, b) => a - b);
//     let firstIndex = 0,
//         secondIndex;
//     let map = {};
//     let result = [];

//     for (firstIndex = 0; firstIndex < nums.length - 2; firstIndex++) {
//         if (nums[firstIndex] > 0) {
//             break;
//         }
//         for (secondIndex = firstIndex + 1; secondIndex < nums.length - 1; secondIndex++) {
//             if (nums[firstIndex] + nums[secondIndex] > 0) {
//                 break;
//             }
//             for (let lastIndex = secondIndex + 1; lastIndex < nums.length; lastIndex++) {
//                 if (nums[firstIndex] + nums[secondIndex] + nums[lastIndex] === 0) {
//                     let arr = [nums[firstIndex], nums[secondIndex], nums[lastIndex]];
//                     let str = arr.join('');
//                     if (!map[str]) {
//                         map[str] = true;
//                         result.push(arr);
//                     }
//                 }
//             }
//         }
//     }

//     return result;
// };
// @lc code=end
