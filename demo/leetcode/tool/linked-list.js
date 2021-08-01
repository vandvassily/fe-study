function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
/**
 * 获取单链表的长度
 * @param {ListNode}} list 单链表
 */
function getLength(list){
    let dump = new ListNode(0, list);
    var length = 0;
    while(dump.next){
        length++;
        dump = dump.next;
    }
    return length;
}

exports.getLength = getLength;