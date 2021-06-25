/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    let res = Number.MAX_SAFE_INTEGER;
    if (triangle.length === 1) {
        return triangle[0][0];
    }
    let prevRow = [triangle[0][0]];
    for (let i = 1; i < triangle.length; i++) {
        const curRow = triangle[i];
        const rowLen = curRow.length;
        const arr = [];
        for (let j = 0; j < rowLen; j++) {
            let value;
            if (j === 0) {
                arr.push(curRow[0] + prevRow[0]);
            } else if (j === rowLen - 1) {
                arr.push(curRow[j] + prevRow[rowLen - 2]);
            } else {
                arr.push(Math.min(curRow[j] + prevRow[j], curRow[j] + prevRow[j - 1]));
            }

            if (i === triangle.length - 1) {
                res = Math.min(res, arr[j]);
            }
        }
        prevRow = arr;
    }

    return res;
};
// @lc code=end
