/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

var grid = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
];

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    const dp = new Array();
    dp.push([grid[0][0]]);
    const row = grid.length
    const column = grid[0].length
    for (let j = 1; j < grid[0].length; j++) {
        dp[0].push(grid[0][j] + dp[0][j - 1]);
    }
    for (let i = 1; i < grid.length; i++) {
        const levelArr = [];
        for (let z = 0; z < column; z++) {
            if (z === 0) {
                levelArr.push(grid[i][0] + dp[i - 1][0]);
            } else {
                levelArr.push(Math.min(grid[i][z] + dp[i - 1][z], grid[i][z] + levelArr[z - 1]));
            }
        }
        dp.push(levelArr);
    }

    return dp[row - 1][column - 1]
};
// @lc code=end
