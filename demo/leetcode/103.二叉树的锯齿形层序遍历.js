/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
var zigzagLevelOrder = function(root) {
    const ret = [];
    if (!root) return ret;
    let stack = [root];
    let reverse = false;
    while (stack.length) {
        let rowArr = [];
        const len = stack.length;
        let temp = [];
        for (let i = 0; i < len; i++) {
            const cur = stack[i];
            rowArr.push(cur.val);
            if (cur.left) temp.push(cur.left);
            if (cur.right) temp.push(cur.right);
        }

        if (reverse) {
            rowArr.reverse();
        }
        ret.push(rowArr);
        reverse = !reverse;
        stack = temp;
    }

    return ret;
};
// @lc code=end
