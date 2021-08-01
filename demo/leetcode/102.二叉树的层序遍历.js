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
    if (!root) return [];
    const ret = [];
    let stack = [root];
    while (stack.length > 0) {
        let temp = [];
        let levelRes = [];
        for (let i = 0; i < stack.length; i++) {
            const cur = stack[i];
            levelRes.push(stack[i].val);
            if (cur.left) temp.push(cur.left);
            if (cur.right) temp.push(cur.right);
        }
        ret.push(levelRes);
        stack = temp;
    }

    return ret;
};
// @lc code=end
