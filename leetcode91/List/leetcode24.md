### 思路

模仿快慢指针,穿针引线法

### 代码

```js
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
    
    if(!head || !head.next) return head
    const dummyHead = new ListNode(-1, head)
  
    let slow = head, fast = head.next, preSlow = dummyHead;
    //穿针引线 
    while(fast){
      let next = fast.next;
      preSlow.next = fast;
      fast.next = slow;
      slow.next = next;
  
      preSlow = slow
      slow = next
      if(!slow) break
      fast = slow.next
    }
  
    return dummyHead.next
  };
```

**复杂度分析** - 时间复杂度：O(N) 。 - 空间复杂度：O（1）
