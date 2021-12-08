# 动态规划

主要是要找到 `状态转移方程` 。类似于 `f(n) = f(n-1) + f(n-2)` 。

大致的意思就是 当前位置的值，需要根据之前一步或N步的值。

## 解题思路

1. 声明 dp 数组（一维或者多维数组）
2. 构造状态转移方程，`f(n) = f(n-1) + f(n-2)`
3. 注意边界值条件。

## 实例

改了一下题目描述。

```js
// 给定一个n*n的表格，每个格子会有一个正整数。
// 现在一人从(0，0)开始出发，只能向右或者向下前进，每经过一个格子，历程都会增加相应的公里数。
// 问此人到达(n-1, n-1)最少需要多少走多少公里？
// 示例：输入: [[0,4],[3,5]]
// 输出：8

const input = [
  [0, 4],
  [3, 5]
];

// 动态规划
function cost(grid = []) {
  if (grid.length === 0) return 0;
  const len = grid.length;
  const firstRow = grid[0];
  const dp = [[firstRow[0]]];
  for (let j = 1; j < firstRow.length; j++) {
    dp[0].push(dp[0][j - 1] + firstRow[j]);
  }

  for (let i = 1; i < len; i++) {
    const row = grid[i];
    const rowArray = [];
    rowArray.push(dp[i - 1][0] + row[0]);

    for (let j = 1; j < row.length; j++) {
      const currValue = row[j];
      // 状态转移方程
      // 比较左侧和上侧，得到最小值，与当前值相加
      rowArray.push(Math.min(rowArray[j - 1], dp[i - 1][j]) + currValue);
    }
    dp.push(rowArray);
  }

  return dp[len - 1][firstRow.length - 1];
}

console.log(cost(input));
```

其实这个就是 原题 [LeetCode NO.64](https://leetcode-cn.com/problems/minimum-path-sum/)。