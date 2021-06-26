/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {

};
// @lc code=end

// “杨辉三角”不知道你听说过吗？我们现在对它进行一些改造。
// 每个位置的数字可以随意填写，经过某个数字只能到达下面一层相邻的两个数字。
// 假设你站在第一层，往下移动，我们把移动到最底层所经过的所有数字之和，
// 定义为路径的长度。请你编程求出从最高层移动到最底层的最短路径长度。

const triangle = [
    [5],
    [7, 8],
    [2, 3, 4],
    [4, 9, 6, 1],
    [2, 7, 9, 4, 5]
];

function findShortestRoute(triangle) {
    if (triangle.length < 2) return triangle[0][0];
    const res = [triangle[0]];
    for (let i = 1; i < triangle.length; i++) {
        const sonArr = []
        for (let j = 0; j < triangle[i].length; j++) {
            if (j === 0) {
                sonArr.push(res[i - 1][0] + triangle[i][0])
            }
            else if (j === triangle[i].length - 1) {
                sonArr.push(res[i - 1][res[i - 1].length - 1] + triangle[i][triangle[i].length - 1])
            }
            else {
                sonArr.push(Math.min(res[i - 1][j - 1] + triangle[i][j], res[i - 1][j] + triangle[i][j]))
            }

        }
        res.push(sonArr)
    }
    return res;
}
