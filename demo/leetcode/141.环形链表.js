/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head || !head.next) return false;
    let slow = head;
    let fast = head.next;
    while(fast) {
        if(fast === slow) return true;
        fast = fast.next;
        if(fast) {
            if (fast === slow) return true;
            slow = slow.next;
            fast = fast.next;
        }
    }
    return false;
};
// @lc code=end

