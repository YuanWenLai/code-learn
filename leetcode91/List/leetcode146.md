### 思路

#### 哈希表+双链表
1.使用哈希表，能快速判断node是否在链表中并获取链表，操作时间o(1)
2.使用双链表，对链表节点的删除操作节省了遍历的o(N)时间，操作时间o(1)
3.使用虚拟节点dummyHead和dummyTail，标记处头尾和尾部的位置
4.缓存规则：
    -用count来记录节点数，判断是否超过容器的最大值
    -若缓存未满，直接将此节点插入头部
    -若缓存已满，先删除链表的尾节点，再新增node到头部
5.达到最新使用的会在头部，最久未使用的，会在尾部


### 代码

```js
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
```

**复杂度分析** - 时间复杂度：O(1) 。 - 空间复杂度：O（N）
