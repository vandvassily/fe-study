/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map1 = {},
        map2 = {},
        res = [];
    nums1.forEach((value) => {
        if (map1[value]) {
            map1[value] = map1[value] + 1;
        } else {
            map1[value] = 1;
        }
    });
    nums2.forEach((value) => {
        if (map2[value]) {
            map2[value] = map2[value] + 1;
        } else {
            map2[value] = 1;
        }
    });

    for (const key in map1) {
        if (Object.hasOwnProperty.call(map1, key)) {
            if (map2[key]) {
                let counts = map1[key] > map2[key] ? map2[key] : map1[key];
                for (let index = 0; index < counts; index++) {
                    res.push(key);
                }
            }
        }
    }

    return res;
};
// @lc code=end
