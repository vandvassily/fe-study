/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

// 暴力优化
var longestPalindrome = function(s) {
    let maxLen = s.length();
    if(maxLen == 1) return s;

    var dp = new Array(s.length);
    dp.forEach((value, index) => {
        console.log(index)
        dp[index] = new Array()
        dp[index][index] = true
    })


};

// // 暴力优化
// var longestPalindrome = function(s) {
//     if (s.length == 1) return s;
//     let res = s.charAt(0);

//     for (let currentNum = 2; currentNum <= s.length; currentNum++) {
//         for (let j = 0; j <= s.length - currentNum; j++) {
//             if(isPalindrome(s,j, j + currentNum - 1)){
//                 res = s.substring(j, j + currentNum);
//             }

//             if (res.length === currentNum) {
//                 break;
//             }
//         }
//     }

//     return res;
// };

// /**
//  * 
//  * @param {string} str 
//  * @param {number} leftIndex 
//  * @param {number} rightIndex 
//  */
// function isPalindrome(str, leftIndex, rightIndex) {
//     while(leftIndex < rightIndex) {
//         if(str.charAt(leftIndex) !== str.charAt(rightIndex)) {
//             return false
//         }
//         leftIndex++;
//         rightIndex--;
//     }

//     return true
// }

// 暴力解法，枚举所有情况
// var longestPalindrome = function(s) {
//     if (s.length == 1) return s;
//     let res = s.charAt(0);

//     for (let currentNum = 2; currentNum <= s.length; currentNum++) {
//         for (let j = 0; j <= s.length - currentNum; j++) {
//             let flag = true;
//             let endIndex = j + currentNum - 1;
//             for (let k = j + 0; k <= currentNum / 2 + j - 1; k++) {
//                 if (s.charAt(k) !== s.charAt(endIndex - k + j)) {
//                     flag = false;
//                     break;
//                 }
//             }

//             if (flag) {
//                 res = s.substring(j, j + currentNum);
//             }

//             if (res.length === currentNum) {
//                 break;
//             }
//         }
//     }

//     return res;
// };
// @lc code=end
