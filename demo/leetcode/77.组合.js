/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const ans = [];
    const temp = [];

    dfs(n, k, 1, temp, ans)
    return ans
};

function dfs(n, k, begin, temp, ans) {
    if (temp.length === k) {
        // 数组要浅拷贝一次
        ans.push(temp.slice())
    }

    // 这里可以优化，剪枝
    for (let i = begin; i <= n; i++) {
        temp.push(i)
        dfs(n, k, i + 1, temp, ans)
        temp.pop()
    }
}
// @lc code=end

