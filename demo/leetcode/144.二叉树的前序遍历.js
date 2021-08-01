/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    return stackSearch(root)
};

// 递归版本
function search(root, arr = []) {
    if(root) {
        arr.push(root.val);
        search(root.left, arr);
        search(root.right, arr);
    }
    return arr;
}

// 迭代版本，使用stack
function stackSearch(root) {
    let stack = [];
    let res = [];
    let current = root;
    while(current || stack.length > 0) {
        while(current) {
            res.push(current.val)
            stack.push(current)
            current = current.left
        }
        current = stack.pop()
        current = current.right
    }

    return res
}
// @lc code=end

