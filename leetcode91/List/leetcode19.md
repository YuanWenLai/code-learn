### 思路

#### 链表，两数的相加和，模拟加法
方法一：
1、快慢指针，找到慢指针的位置，就是要删除点的前置节点preNode

方法二：
1、找出链表的长度
2、遍历到要删除节点的前置节点preNode

删除操作:
preNode.next = preNode.next.next

### 代码

```js
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(0,head)
    let fast = head,
        slow = dummy
    for(let i=0;i<n;i++) {
        fast = fast.next
    }

    while(fast) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next

    return dummy.next
};
```

**复杂度分析** - 时间复杂度：O(N) 。 - 空间复杂度：O（1）

```js
var removeNthFromEnd2 = function(head, n) {
    const dummy = new ListNode(0,head) 
    let length = 0
    let cur = head
    while(cur) {
        cur = cur.next
        length++
    }
    cur = dummy

    for(let i=1;i<length -n+1;i++) {
        cur = cur.next
    }
    cur.next = cur.next.next
    return dummy.next
};
```

**复杂度分析** - 时间复杂度：O(N) 。 - 空间复杂度：O（1）
