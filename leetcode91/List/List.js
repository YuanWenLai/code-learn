class Node {
    constructor(val) {
        this.val = val  
        this.next = null
    }
}

class List {
    constructor() {
        this.head = new Node()
        this.tail = this.head;
    }
    // 新增一个节点
    append(val) {
        let node = new Node(val)
        this.tail.next = node
        this.tail = node
    }
    // 寻找一个节点
    find(item) {
        var curNode = this.head.next
        while(curNode.val != item) {
            curNode = curNode.next
        }
        return curNode
    }

    // 向某元素后面插入一个节点
    insert(newVal,item) {
        var newNode = new Node(newVal)
        var curNode = this.find(item)
        newNode.next = curNode.next
        curNode.next = newNode
    }

    // 查找某一个节点的前驱节点
    findPrevious(item) {
        var curNode = this.head
        while(!((curNode.next == null) && (curNode.next.val != item))) {
            curNode = curNode.next
        }
        return curNode
    }

    // 删除某一个节点
    removeNode(item) {
        var preNode = this.findPrevious(item)
        if(!(preNode.next == null)) {
            preNode.next = preNode.next.next
        }
    }

    // 修改某一结点的数据
    edit(item,newVal) {
        var curNode = this.find(item)
        curNode.val = newVal
    }

    // 展示node list 
    show() {
        var curNode = this.head
        while(curNode.next != null) {
            console.log(curNode.val + '->')
            curNode = curNode.next
        }

        console.log(curNode.val + '->null')
    }
}
module.exports = {
    List
}