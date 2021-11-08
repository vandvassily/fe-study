/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
// 深度优先搜索 + 栈
// 当前节点不为空，则向路径栈中存入当前节点的值
// 判断该节点为叶子节点，则向结果数组中推入 拼接的值
// 节点有左节点，和右节点，则继续递归
// 递归后则弹出栈顶
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  const ans = [];
  const path = [];
  dfs(root, path, ans);
  return ans;
};

function dfs(root, path = [], ans = []) {
  if (typeof root.val !== 'undefined') path.push(root.val);
  if (!root.left && !root.right) ans.push(path.join('->'));
  if (root.left) dfs(root.left, path, ans)
  if (root.right) dfs(root.right, path, ans);
  path.pop();
}
// @lc code=end
