/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root) return false;
    const ret = [];
    dfs(root, targetSum, ret)
    return ret.indexOf(true) > -1
};

function dfs(node, targetSum, ret) {
    if(node.left) {
        dfs(node.left, targetSum - node.val, ret)
    }

    if(node.right) {
        dfs(node.right, targetSum - node.val, ret)
    }

    if(!node.left && !node.right) {
        ret.push(targetSum - node.val === 0) 
    }
}
// @lc code=end

