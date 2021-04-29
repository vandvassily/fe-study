/*
 * @lc app=leetcode.cn id=575 lang=javascript
 *
 * [575] 分糖果
 */

// @lc code=start
/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
    const map = {};
    let size = 0;
    const len2 = candyType.length / 2;
    for (let i = 0; i < candyType.length; i++) {
        if (!map[candyType[i]]) {
            map[candyType[i]] = true
            size++;
        }
    }

    return size >= len2 ? len2 : size
};

// var distributeCandies = function (candyType) {
//     var set = new Set(candyType)
//     return set.size >= candyType.length / 2 ? candyType.length / 2 : set.size
// };
// @lc code=end

