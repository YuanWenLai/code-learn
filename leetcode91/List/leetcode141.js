// 141. 环形链表

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    if(head == null || head.next == null) return false

    let slow = head
    let fast = head.next

    while(slow != fast) {
        // 当快指针为空或下个节点为空，代表快指针走到了list末端
        if(fast == null || fast.next == null) {
            return false
        }
        // 慢走一步
        slow = slow.next
        // 快走两步
        fast = fast.next.next
    }

    // 若跳出while遍历，则slow和fast相遇
    return true
};