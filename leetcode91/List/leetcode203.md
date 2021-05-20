### 思路

1、简单的遍历链表进行删除
2、需要用到额外空间来辅助删除操作

### 代码

```js
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    if(head == null) return null
    // 用一个前置节点来保存链表，防止头部被删除后找不到起始点
    let preNode = new ListNode(-1)
    preNode.next = head
    let cur = head
    let pre = preNode
    do {
        if(cur.val == val) {
            pre.next = cur.next
            cur = cur.next
        }else {
            pre = cur
            cur = cur.next
        }
        
    } while(cur)
    return preNode.next 
};
```

**复杂度分析** - 时间复杂度：O(logN) 。 - 空间复杂度：O（1）
