/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    return findDeep(root, 0);
};

function findDeep(root, height) {
    if (!root) return height;
    let res = height + 1;
    res = Math.max(findDeep(root.left, res), findDeep(root.right, res));

    return res;
}
// @lc code=end
