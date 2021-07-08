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
        ret.push(levelRes[levelRes.length - 1]);
        stack = temp;
    }

    return ret;
}

// @lc code=end

// 先层序遍历，在循环遍历找出最后一个
// var rightSideView = function(root) {
//     const order = levelOrder(root);
//     const ret = [];
//     for (let i = 0; i < order.length; i++) {
//         ret.push(order[i][order[i].length - 1]);
//     }
//     return ret;
// };
// var levelOrder = function(root) {
//     if (!root) return [];
//     const ret = [];
//     let stack = [root];
//     while (stack.length > 0) {
//         let temp = [];
//         let levelRes = [];
//         for (let i = 0; i < stack.length; i++) {
//             const cur = stack[i];
//             levelRes.push(stack[i].val);
//             if (cur.left) temp.push(cur.left);
//             if (cur.right) temp.push(cur.right);
//         }
//         ret.push(levelRes);
//         stack = temp;
//     }

//     return ret;
// };
