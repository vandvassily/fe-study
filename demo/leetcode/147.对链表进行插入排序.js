/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
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
var insertionSortList = function(head) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let lastSorted = head,
        cur = head.next;
    while (cur != null) {
        if (lastSorted.val <= cur.val) {
            lastSorted = lastSorted.next;
        } else {
            let circle = dummy;
            while (circle.next.val <= cur.val) {
                circle = circle.next;
            }

            lastSorted.next = cur.next;
            cur.next = circle.next;
            circle.next = cur;

        }
        cur = lastSorted.next;
    }

    return dummy.next;
};
// @lc code=end
