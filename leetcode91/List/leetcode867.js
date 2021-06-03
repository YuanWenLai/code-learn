// 876. 链表的中间结点

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