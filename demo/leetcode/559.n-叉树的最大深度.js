/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N 叉树的最大深度
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0;
    return dfs(root, 1)
};

function dfs(root, h = 1) {
    if(!root || root.children.children === 0) return h;
    const children = root.children;
    let max = h;

    for (let i = 0; i < children.length; i++) {
        const element = children[i];
        max = Math.max(dfs(element, h + 1), max)
    }

    return max
}
// @lc code=end

