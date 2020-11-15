/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !head.next || k == 0) return head;
    let dump = new ListNode(0, head);
    let pos = dump;

    var length = 0;
    while (pos.next) {
        length++;
        pos = pos.next;
    }
    pos.next = dump.next;

    if (k >= length) {
        k = k % length;
    }

    pos = head;
    for (let i = 0; i < length - k - 1; i++) {
        pos = pos.next;
    }

    dump.next = pos.next;
    pos.next = null;

    return dump.next;
};

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

var list = new ListNode(1, new ListNode(2, new ListNode(3)));
var list2 = new ListNode(1, new ListNode(2, new ListNode(3)));
var list3 = null;
function printListNode(listNode) {
    var res = [];
    let n = 0;
    while (listNode.next && n < 10) {
        res.push(listNode.val);
        n++;
        listNode = listNode.next;
    }
    res.push(listNode.val);

    console.log(res.join('->'));
}

function getLength(list) {
    let dump = new ListNode(0, list);
    var length = 0;
    while (dump.next) {
        length++;
        dump = dump.next;
    }
    return length;
}
// rotateRight(list, 3);
// rotateRight(list3, 3);

// @lc code=endPrev
