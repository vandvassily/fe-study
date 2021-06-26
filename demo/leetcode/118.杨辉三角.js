/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let tran = [[1], [1, 1]]
    if (numRows <= 2) return tran.slice(0, numRows);
    for (let i = 2; i < numRows; i++) {
        const sonArr = [1];
        for (let j = 1; j < i; j++) {
            sonArr.push(tran[i - 1][j - 1] + tran[i - 1][j])
        }
        sonArr.push(1);
        tran.push(sonArr)
    }
    return tran
};
// @lc code=end

