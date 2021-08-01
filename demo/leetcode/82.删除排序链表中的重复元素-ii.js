/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
var deleteDuplicates = function(head) {
    let dump = new ListNode(0, head);
    let current = dump;
    while(current.next && current.next.next) {
        if(current.next.val == current.next.next.val) {
            while(current.next.next && current.next.val == current.next.next.val){
                current.next.next = current.next.next.next;
            }
            current.next = current.next.next
        }
        else {
            current = current.next
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

// deleteDuplicates(list);
// deleteDuplicates(list2);
// deleteDuplicates(list3);
// @lc code=end

