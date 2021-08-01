/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function(root) {
    return postorder2(root);
};

function postorder(root, arr = []) {
    if (root) {
        postorder(root.left, arr);
        postorder(root.right, arr);
        arr.push(root.val);
    }

    return arr;
}

function postorder2(root) {
    let stack = [],
        res = [];
    let current = root;
    let last = null;
    while (current || stack.length > 0) {
        while (current) {
            stack.push(current);
            current = current.left;
        }

        current = stack[stack.length - 1];
        if (!current.right || current.right === last) {
            stack.pop();
            res.push(current.val);
            last = current;
            current = null;
        } else {
            current = current.right;
        }
    }

    return res;
}
// @lc code=end
