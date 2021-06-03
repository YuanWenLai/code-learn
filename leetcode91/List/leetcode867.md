### 思路

快慢指针

### 代码

```js
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
    let fast = head
    let slow = head
    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
};
```

**复杂度分析** - 时间复杂度：O(N) 。 - 空间复杂度：O（1）
