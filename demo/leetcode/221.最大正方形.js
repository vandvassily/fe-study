/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  // 动态规划
  if (matrix.length == 0 || matrix[0].length == 0) {
    return 0
  }

  let maxSide = 0
  const rows = matrix.length
  const columns = matrix[0].length
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (matrix[i][j] == '1') {
        if (i == 0 || j == 0) {
          matrix[i][j] = 1
        } else {
          matrix[i][j] =
            Math.min(matrix[i - 1][j - 1], matrix[i - 1][j], matrix[i][j - 1]) +
            1
        }
        maxSide = Math.max(maxSide, matrix[i][j])
      }
    }
  }

  return maxSide * maxSide
}

// 暴力破解法
// var maximalSquare = function(matrix) {
//   if (matrix.length == 0 || matrix[0].length == 0) {
//     return 0
//   }
//   let maxSide = 0
//   const rows = matrix.length
//   const columns = matrix[0].length
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < columns; j++) {
//       if (matrix[i][j] === '1') {
//         maxSide = Math.max(maxSide, 1)
//         let currentMaxSide = Math.min(rows - i, columns - j)

//         let flag = true
//         for (let z = 1; z < currentMaxSide; z++) {
//           if (matrix[i + z][j + z] === '0') {
//             break
//           }

//           for (let m = 0; m < z; m++) {
//             if (matrix[i + z][j + m] === '0' || matrix[i + m][j + z] === '0') {
//               flag = false
//               break
//             }
//           }

//           if (flag) {
//             maxSide = Math.max(maxSide, z + 1)
//           } else {
//             break
//           }
//         }
//       }
//     }
//   }

//   return maxSide * maxSide
// }
// @lc code=end
