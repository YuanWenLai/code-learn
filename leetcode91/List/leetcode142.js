// 142. 环形链表 II

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 使用快慢指针来判单环形链表
var detectCycle1 = function(head) {
    if(head == null || !head.next == null) return null
    let fast = head, slow = head

    do {
        if(fast != null && fast.next != null) {
            fast = fast.next.next
        } else {
            fast = null
        }
        slow = slow.next
    } while (fast != slow)

    // 若快指针走到尾 null
    if(fast == null) return null

    // 否则快慢指针已经相遇，让快慢指针二次相遇时，即为环的起点
    fast = head
    while(fast != slow) {
        fast = fast.next
        slow = slow.next
    }
    return fast
};
// 用哈希表来存储遍历过的节点，若出现一致，则抛出该节点
 var detectCycle2 = function(head) {
    let hashList = new Set()
    while(head) {
        if(hashList.has(head)) {
            return head
        }else {
            hashList.add(head)
        }
        head = head.next
    }
    return null
};