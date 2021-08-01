/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function(head) {
    let cur = null;
    let prev = head;
    while(prev !== null) {
        let temp = prev.next;

        prev.next = cur;
        cur = prev;
        prev = temp;
    }
    return cur;
}

// function ListNode(val, next) {
//   this.val = val === undefined ? 0 : val
//   this.next = next === undefined ? null : next
// }
// var list = new ListNode(
//   1,
//   new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3))))
// )
// function printListNode(listNode) {
//   var res = []
//   let n = 0
//   while (listNode.next && n < 10) {
//     res.push(listNode.val)
//     n++
//     listNode = listNode.next
//   }
//   res.push(listNode.val)

//   console.log(res.join('->'))
// }

// var list2 = new ListNode(
//   1,
//   new ListNode(
//     1,
//     new ListNode(
//       1,
//       new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(2))))
//     )
//   )
// )

// reverseList(list)
// @lc code=end
