### 思路

#### 哈希表+链表
1、用hash表存储遍历过的链表节点
2、若出现重复在hash表的节点，抛出该节点
3、若无，则返回null，代表该链表没有环

#### 快慢指针
1、用快慢指针判断出是否有环
2、二次相遇时，得到环的起始点

### 代码

```js

// 快慢指针
var detectCycle1 = function(head) {
    if(head == null || !head.next == null) return null
    let fast = head, slow = head

    do {
        if(fast != null && fast.next != null) {
            fast = fast.next.next
        } else {
            fast = null
        }
        slow = slow.next
    } while (fast != slow)

    // 若快指针走到尾 null
    if(fast == null) return null

    // 否则快慢指针已经相遇，让快慢指针二次相遇时，即为环的起点
    fast = head
    while(fast != slow) {
        fast = fast.next
        slow = slow.next
    }
    return fast
};
```
**复杂度分析** - 时间复杂度：O(logN) 。 - 空间复杂度：O（1）

```js

// 用哈希表来存储遍历过的节点，若出现一致，则抛出该节点
 var detectCycle2 = function(head) {
    let hashList = new Set()
    while(head) {
        if(hashList.has(head)) {
            return head
        }else {
            hashList.add(head)
        }
        head = head.next
    }
    return null
};
```

**复杂度分析** - 时间复杂度：O(logN) 。 - 空间复杂度：O（N）
