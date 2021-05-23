// 707. 设计链表

var ListNode  = function(val) {
    this.val = val
    this.pre = null
    this.next = null
}

/**
 * Initialize your data structure here.
 */
 var MyLinkedList = function() {
    this.cache = new Map()

    // 存储节点数量
    this.nodeCount = 0
    
    // 构造虚拟节点，来指向最多使用和最少使用
    this.dummyHead = new ListNode()
    this.dummyTail = new ListNode()

    // 关联这两个虚拟点
    this.dummyHead.next = this.dummyTail
    this.dummyTail.pre = this.dummyHead
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(!this.cache.get(index)) return -1
    let node = this.cache.get(index)
    return node.val
};



/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let newNode = new ListNode(val)
    newNode.pre = this.dummyHead
    newNode.next = this.dummyHead.next
    this.dummyHead.next.pre = newNode
    this.dummyHead.next = newNode
    this.cache.set(this.nodeCount,)
    this.nodeCount++
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let newNode = new ListNode(val)
    newNode.pre = this.dummyTail
    newNode.next = this.dummyTail.next
    this.dummyHead.pre.next = newNode
    this.dummyHead = newNode
    this.nodeCount++
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {

};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {

};
