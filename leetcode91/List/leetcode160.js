// 160. 相交链表

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    let hashList = new Set()
    while(headA) {
        hashList.add(headA)
        headA = headA.next
    }
    while(headB) {
        if(hashList.has(headB)) return headB
        headB = headB.next
    }
    return null
};