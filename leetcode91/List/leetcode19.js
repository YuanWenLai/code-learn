// 19. 删除链表的倒数第 N 个结点

// 1.快慢指针
// 2.遍历找节点删除

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