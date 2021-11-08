/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
// 简化坐标，上下左右移动
const cor = [-1, 0, 1, 0, -1];
// 深度优先搜索，以某个节点为开始，为1则以此节点为中心，向上下左右移动，遇到0，则返回；
// 遇到1则继续递归
// 遍历经过的1设置为0，减少判断
// 小技巧： 通过坐标数组，简化上下左右判断
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  let max = 0;

  for (let i = 0; i < grid.length; i++) {
    const element = grid[i];
    for (let j = 0; j < element.length; j++) {
      if (grid[i][j] === 1) {
        max = Math.max(max, dfs(grid, i, j));
      }
    }
  }

  return max;
};

function dfs(grid, row, col) {
  if (grid[row][col] === 0) return 0;
  grid[row][col] = 0;
  let sum = 1;
  let x = 0,
    y = 0;
  for (let i = 0; i < 4; i++) {
    x = row + cor[i];
    y = col + cor[i + 1];
    if (x >= 0 && x < grid.length && y >= 0 && y < grid[0].length)
      sum += dfs(grid, x, y);
  }

  return sum;
}
// @lc code=end
