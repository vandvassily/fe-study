/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
// 时间换空间，hashmap
var detectCycle = function(head) {
    if(head === null) return null;
    var fast = head, slow = head;
    while(fast !== null) {
        slow = slow.next
        if(fast.next) {
            fast = fast.next.next
        }
        else {
            return null
        }

        if(fast === slow) {
            fast = head;
            while(fast != slow) {
                slow = slow.next
                fast = fast.next
            }
            return fast
        }
    }

    return null
};
// // 时间换空间，hashmap
// var detectCycle = function(head) {
//     var map = new Map();
//     while (head) {
//         if (map.has(head)) {
//             return head;
//         }
//         map.add(head, 1);
//         head = head.next;
//     }
//     return null;
// };
// @lc code=end
