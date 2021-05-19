### 思路

1、哈希表存储ListA遍历的值
2、遍历ListB，若存在与HashA相同的节点，返回节点，否则返回null

### 代码

```js
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    let hashList = new Set()
    while(headA) {
        hashList.add(headA)
        headA = headA.next
    }
    while(headB) {
        if(hashList.has(headB)) return headB
        headB = headB.next
    }
    return null
};
```

**复杂度分析** - 时间复杂度：O(N) 。 - 空间复杂度：O（N）
