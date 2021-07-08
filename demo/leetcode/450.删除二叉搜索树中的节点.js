/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    let curNode = root; // 初始化指向根节点
    let curNodeParent = null; // 删除节点的父节点

    // 查找节点
    while (curNode !== null) {
        curNodeParent = curNode;
        if (curNode.val < key) {
            curNode = curNode.right;
        } else if (curNode.val > key) {
            curNode = curNode.left;
        } else {
            break;
        }
    }
    if (curNode === null) return;

    // 如果要删除的是节点有两个子节点，直接找右子树的最小值，删除最小值，移动到当前位置
    if (curNode.left !== null && curNode.right !== null) {
        let minNode = curNode.right;
        let minNodeParent = curNode;

        while (minNode.left !== null) {
            minNodeParent = minNode;
            minNode = minNode.left;
        }

        curNode.val = minNode.val;
        curNode = minNode;
        curNodeParent = minNodeParent;
    }

    // 如果要删除的节点只有一个节点或者叶子节点
    let child = null;
    if (curNode.left !== null) {
        child = curNode.left;
    } else if (curNode.right !== null) {
        child = curNode.right;
    } else {
        child = null;
    }

    if (curNodeParent === null) {
        root = child;
    } else if (curNodeParent.left == curNode) {
        curNodeParent.left = child
    }
    else {
        curNodeParent.right = child
    }
    return root
};
// @lc code=end
