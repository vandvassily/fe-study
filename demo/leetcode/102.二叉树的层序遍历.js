/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    const res = [];
    const queue = [];
    queue.push(root);

    while(queue.length > 0) {
        const len = queue.length;
        const rowArray = [];
        for (let i = 0; i < len; i++) {
            let cur = queue.shift();
            rowArray.push(cur.val);
            if (cur.left) {
                queue.push(cur.left);
            }

            if(cur.right) {
                queue.push(cur.right)
            }
        }
        res.push(rowArray);
    }

    return res
};
// @lc code=end

