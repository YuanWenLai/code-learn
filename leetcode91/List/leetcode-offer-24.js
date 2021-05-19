// 剑指 Offer 24. 反转链表

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {

    let prev = null;
    let curr = head;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};

