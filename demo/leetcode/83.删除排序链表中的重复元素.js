/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
    let current = head;
    while(current && current.next) {
        if(current.val == current.next.val) {
            current.next = current.next.next;
        }
        else  {
            current = current.next;
        }
    }
    
    // printListNode(dump);
    return head;
};
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
var list = new ListNode(
    1,
    new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3))))
);
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

var list2 = new ListNode(
    1,
    new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(2))))))
);

// deleteDuplicates(list);
// @lc code=end
