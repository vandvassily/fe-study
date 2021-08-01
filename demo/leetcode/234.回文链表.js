/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
var isPalindrome = function(head) {
    // if(!head) return false;
    let arr = [];
    let len = 0

    while (head) {
        arr.push(head.val);
        len++;
        head = head.next;
    }

    for (let i = 0; i < len / 2; i++) {
        if (arr[i] !== arr[len - 1 - i]){
            return false
        }
        
    }

    return true;

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
// var list4 = new ListNode(1, new ListNode(1));

// console.log(isPalindrome(list4))

// @lc code=end

