/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

//  Tags
// Companies
// amazon | apple | linkedin | microsoft

// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

// 示例：

// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4
var mergeTwoLists = function (l1, l2) {
    if (l1 == null) return l2;
    else if (l2 == null) return l1;
    else if (l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

// 迭代
// var mergeTwoLists = function (l1, l2) {
//     const res = new ListNode(0);

//     let prev = res;

//     while (l1 !== null && l2 !== null) {
//         if (l1.val <= l2.val) {
//             prev.next = l1;
//             l1 = l1.next;
//         } else {
//             prev.next = l2;
//             l2 = l2.next;
//         }
//         prev = prev.next;
//     }

//     prev.next = l1 === null ? l2 : l1;

//     return res.next;
// };
// @lc code=end
