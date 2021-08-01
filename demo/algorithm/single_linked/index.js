/**
 * @file: 单链表
 * @author: ZHS 
 * @Date: 2020-08-23 12:23:50 
 * @Last Modified by: ZHS
 * @Last Modified time: 2020-08-27 20:44:56
 */

/**
 * 功能：
 * 1. 根据value查找
 * 2. 根据index查找
 * 3. 链表尾部插入
 * 4. 指定元素向后插入
 * 5. 查找前一个
 * 6. 根据值删除
 * 7. 遍历显示所有节点
 */


class Node {
    constructor(value) {
        this.data = value
        this.next = null
    }
}

class SingleLinked {
    constructor(){
        this.head = new Node(null)
    }

    // 根据值查找
    findByValue(value) {
        let temp = this.head

        while(temp.data !== value && temp.next){
            temp = temp.next
        }

        return temp.data === value ? temp : null
    }

    // 通过索引查找
    findByIndex(index){
        let pos = 0;
        let temp = this.head

        if(index === 0) {
            return temp
        }

        while(temp.next && pos !== index) {
            temp = temp.next
            pos++
        }

        return pos === index ? temp : null;
    }

    // 尾部插入
    append(value){
        let temp = this.head

        if(!temp.data) {
            this.head.data = value
            return;
        }

        while(temp.next){
            temp = temp.next
        }

        temp.next = new Node(value)
    }

    // 指定节点向后插入
    insert(newValue, value) {
        let resultNode = this.findByValue(value);
        if(!resultNode) {
            console.log('未找到节点');
            return;
        }

        let newNode = new Node(newValue)
        newNode.next = resultNode.next
        resultNode.next = newNode
    }

    // 查找前一个
    findPrev(value) {
        let temp = this.head

        if(temp.data === value) {
            console.log('没有前一个节点')
            return null;
        }

        while(temp.next && temp.next.data !== value){
            temp = temp.next
        }

        return temp.next && temp.next.data === value ? temp : null
    }

    // 根据值删除
    deleteByValue(value) {
        let curNode = this.findByValue(value)
        if(!curNode){
            console.log('当前值不存在')
            return
        }
        let prevNode = this.findPrev(value)

        if(!prevNode) {
            this.head = curNode.next ? curNode.next : new Node(null)
        }
        else {
            prevNode.next = prevNode.next.next
        }
    }

    // 展示所有数据
    display(){
        let temp = this.head

        while(temp.next) {
            console.log(temp.data)
            temp = temp.next
        }

        console.log(temp.data)
    }
}


let singleLinked = new SingleLinked();

singleLinked.append(12);
singleLinked.append(13);
singleLinked.append(14);
singleLinked.append(15);

console.log(JSON.parse(JSON.stringify(singleLinked)))
// console.log(singleLinked.findByIndex(0));
// console.log(singleLinked.findByIndex(5));
// console.log(singleLinked.findByValue(11));
// console.log(singleLinked.findByValue(12));
// console.log(singleLinked.findByValue(16));
singleLinked.display()

console.log(singleLinked.findPrev(14));
console.log(singleLinked.findPrev(16));
console.log(singleLinked.deleteByValue(12));
console.log(singleLinked.deleteByValue(15));
// console.log(singleLinked)
singleLinked.display()

// singleLinked.insert(16, 15)
// console.log(singleLinked.findByValue(16));

// singleLinked.insert(17, 12)
// console.log(singleLinked.findByValue(17));

