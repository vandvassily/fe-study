/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists.length === 0) {
        return null;
    } else if (lists.length === 1) {
        return lists[0];
    }

    let res = lists[0];
    for (let i = 1; i < lists.length; i++) {
        res = mergeTwoLists(res, lists[i]);
    }

    return res;
};

var mergeTwoLists = function (l1, l2) {
    const res = new ListNode(0);

    let prev = res;

    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            prev.next = l1;
            l1 = l1.next;
        } else {
            prev.next = l2;
            l2 = l2.next;
        }
        prev = prev.next;
    }

    prev.next = l1 === null ? l2 : l1;

    return res.next;
};
// @lc code=end
