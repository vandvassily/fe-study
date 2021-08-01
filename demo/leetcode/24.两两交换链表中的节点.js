/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    // if(!head || !head.next) return head;
    var dump = new ListNode(0, head);
    var pos = dump;
    while(pos.next && pos.next.next){
        var a = pos.next;
        var b = pos.next.next;
        pos.next = b;
        a.next = b.next;
        b.next = a;
        pos = pos.next.next;
    }

    // printListNode(dump.next);
    return dump.next

};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
var list2 = new ListNode(1, new ListNode(2));
function printListNode(listNode) {
    var arr = [];
    var pos = listNode;
    while (pos.next){
        arr.push(pos.val);
        pos = pos.next
    }
    arr.push(pos.val);

    console.log(arr.join('->'))
}

swapPairs(list)
swapPairs(new ListNode(0, new ListNode(1)))
// @lc code=end

