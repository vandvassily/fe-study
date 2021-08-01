/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let dump = new ListNode(0, head);
    let current = dump;
    while(current.next) {
        if(current.next.val == val) {
            current.next = current.next.next
        }
        else {
            current = current.next;
        }
    }
    return dump.next;
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

// removeElements(list, 4);
// @lc code=end

