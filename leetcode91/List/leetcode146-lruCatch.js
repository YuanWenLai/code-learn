// 146. LRU 缓存机制

/**
 * @param {number} capacity
 */

var ListNode  = function(key,val) {
    this.key = key
    this.val = val
    this.pre = null
    this.next = null
}

/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
    this.capacity = capacity
    // 用map函数来存储节点，key
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
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    // 在缓存中找不到该节点时，返回-1
    if(!this.cache.get(key)) return -1

    let node = this.cache.get(key)
    this.moveTohead(node)

    return node.val
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {

    // 在缓存获取这个key的值
    const node = this.cache.get(key)

    //若缓存中出现这个节点
    if(node) {
        // 更新该节点的值
        node.val = value
        // 再保存到缓存中
        this.cache.set(key,node)
        // 更新最新使用的链表
        this.moveTohead()
    }else {
        // 先判断是否超过容器的最大值
        if(this.nodeCount == this.capacity) {
            // 删除最少应用
            this.removeLeastUsedNode() 
        }
        const newNode = new ListNode(key,value)
        this.cache.set(key,newNode)
        // 最新加入的节点保存到头部
        this.addNodeToHead(newNode)
        // 节点数量增加
        this.nodeCount ++
    }
};


/** 
 * @param {list} node 
 * @return {void}
 */
LRUCache.prototype.moveTohead = function(node) {
    this.removeNode(node)
    this.addNodeToHead(node)
};

/** 
 * @param {list} node 
 * @return {void}
 */
 LRUCache.prototype.removeNode = function(node) {
    node.pre.next = node.next
    node.next.pre = node.pre
};

/** 
 * @param {void}
 * @return {void}  
 */
 LRUCache.prototype.removeLeastUsedNode = function() {
    this.nodeCount --
    const leastUsedNode = this.dummyTail.pre
    this.cache.delete(leastUsedNode.key)
    this.removeNode(leastUsedNode)
};


/** 
 * @param {list} node 
 * @return {void}
 */
 LRUCache.prototype.addNodeToHead = function(node) {
     // 在虚拟节点头和真实节点之间，插入node
     node.pre = this.dummyHead
     node.next = this.dummyHead.next
     this.dummyHead.next.pre = node
     this.dummyHead.next = node
};



// error case
// ["LRUCache","put","put","get","put","put","get"]
// [[2],[2,1],[2,2],[2],[1,1],[4,1],[2]]