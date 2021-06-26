/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
var rightSideView = function(root) {
    if(root === null) return [];
    const ret = [];
    let p = [];
    p.push(root);
    while (p.length > 0) {
        let temp = [];
        let temp2 = [];
        for (let i = 0; i < p.length; i++) {
            const item = p[i];
            temp2.push(item.val);
            if (item.left) {
                temp.push(item.left);
            }
            if (item.right) {
                temp.push(item.right);
            }
        }
        ret.push(temp2[temp2.length - 1]);
        p = temp;
    }

    return ret;
};
// @lc code=end
