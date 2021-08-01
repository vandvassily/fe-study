/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
var largestValues = function(root) {
    if (!root) return [];
    const ret = [];
    let stack = [root];
    while (stack.length) {
        let rowMax = stack[0].val;
        const len = stack.length;
        let temp = [];
        for (let i = 0; i < len; i++) {
            const cur = stack[i];
            rowMax = Math.max(rowMax, cur.val);
            if (cur.left) temp.push(cur.left);
            if (cur.right) temp.push(cur.right);
        }
        ret.push(rowMax);
        stack = temp;
    }

    return ret;
};
// @lc code=end
