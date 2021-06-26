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

    var temp = [];
    var res = [];
    temp.push(root);
    while(temp.length > 0) {
        res.push([])
        let temp2 = [];
        for (let i = 0; i < temp.length; i++) {
            let item = temp[i]
            res[res.length - 1].push(item.val);
            if(item.left) temp2.push(item.left);
            if(item.right) temp2.push(item.right);
        }
        temp = temp2;
    }

    return res;
};
// @lc code=end

