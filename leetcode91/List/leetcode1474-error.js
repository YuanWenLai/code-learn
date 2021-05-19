// 1474.删除链表的倒数第N个节点

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {

    let fast = head,
        slow = head
        
    // 快指针先跑n步
    while(n-- > 0) {
        fast = fast.next
    }

    while(fast && fast.next) {
        fast = fast.next
        slow = slow.next
    }
    if(fast == slow) return null
    slow.next = slow.next.next
    return head
};


