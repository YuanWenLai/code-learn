### 思路

1、用快慢指针来确定链表的中间节点
2、构造中间节点为数的根
3、用递归的方式来继续构造左右子树的树

### 代码

```js

var sortedListToBST = function(head) {
    if(!head) return null
    
    let slow = head,
        fast = head,
        preSlow = null
    
    while(fast && fast.next) {
        preSlow = slow
        fast = fast.next.next
        slow = slow.next
    }

    // 如果快指针到达尾部，则慢指针到达中间点
    // 通过中间点来构建树
    const root = new TreeNode(slow.val)

    if(preSlow) {
        // 剪掉preSlow对中间节点（root）的指向
        preSlow.next = null
        root.left = sortedListToBST(head)
    }
    root.right = sortedListToBST(slow.next)

    return root
};
```

**复杂度分析** - 时间复杂度：O(NlogN) 。 - 空间复杂度：O（NlogN）
