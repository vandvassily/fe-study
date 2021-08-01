/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const sonLen = nums1.length;
    const fatherLen = nums2.length;

    const res = [];

    for (let i = 0; i < sonLen; i++) {
        res[i] = -1;
        for (let j = 0; j < fatherLen; j++) {
            if(nums1[i] === nums2[j]) {
                for (let z = j + 1; z < fatherLen; z++) {
                    if(nums1[i] < nums2[z]) {
                        res[i] = nums2[z]
                        break
                    }
                    
                }
                break
            }
        }
    }

    return res;
};
// @lc code=end

