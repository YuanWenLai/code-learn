### 思路

#### 链表，两数的相加和，模拟加法
1、输入的两个链表是逆序储存数字的，因为链表中相同位置可以直接相加
2、相加的和，看是否有进位，用carry来储存进位的情况
3、用虚拟节点head和tail来指向新的的链表
4、没新增一个相加和，往链表尾新增，tail.next  = new ListNode(sum%10)；tail = tail.next
5、若链表遍历完后，carry还大于0，说明相加和进位了，还需要新增一个进位的节点，节点值为carry

### 代码

```js
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let head = null,
        tail = null,
        carry = 0
    while(l1 || l2) {
        const num1 = l1.val || 0
        const num2 = l2.val || 0
        const sum = num1 + num2 + carry
        // 编辑两个虚拟节点的位置
        if(!head) {
            head = tail = new ListNode(sum%10)
        }else {
            tail.next  = new ListNode(sum%10)
            tail = tail.next
        }
        carry = Math.floor(sum/10)
        if(l1) {
            l1 = l1.next
        }

        if(l2) {
            l2 = l2.next
        }
    }
    if(carry > 0) {
        tail.next = new ListNode(carry)
    }
    return head
};
```

**复杂度分析** - 时间复杂度：O(N) 。 - 空间复杂度：O（1）
