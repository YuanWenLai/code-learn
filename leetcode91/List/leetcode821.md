### 思路

模仿快慢指针

### 代码

```js
var rotateRight = function (head, k) {
  if (!head || !head.next || k === 0) return head;

  let length = 1,
    cur = head;

  //找出长度
  while (cur.next) {
    cur = cur.next;
    length++;
  }

  //找出真实的k的次数
  k = k % length;
  //如果次数是0，那么就等于没干，并且如果k = 0 后面会报错
  if (k === 0) return head;

  //快慢指针，让快的先走 k - 1步，这样慢的就刚好是newHead，快的刚好是现在的尾巴
  let fast = head,
    slow = head,
    count = k - 1;

  while (count > 0) {
    fast = fast.next;
    count--;
  }

  let pre = null;
  while (fast.next) {
    pre = slow;
    fast = fast.next;
    slow = slow.next;
  }

  pre.next = null;
  fast.next = head;
  return slow;
};
```

**复杂度分析** - 时间复杂度：O(N) 。 - 空间复杂度：O（1）
