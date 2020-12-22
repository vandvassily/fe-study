/*
 * @lc app=leetcode.cn id=237 lang=javascript
 *
 * [237] 删除链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node, val) {
    node.val = node.next.val;
    node.next = node.next.next;
};

// function ListNode(val, next) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
// }
// var list = new ListNode(
//     1,
//     new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3))))
// );
// function printListNode(listNode) {
//     var res = [];
//     let n = 0;
//     while (listNode.next && n < 10) {
//         res.push(listNode.val);
//         n++;
//         listNode = listNode.next;
//     }
//     res.push(listNode.val);

//     console.log(res.join('->'));
// }

// var list2 = new ListNode(
//     1,
//     new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(3)))))))
// );
// var list3 = null;
// @lc code=end

