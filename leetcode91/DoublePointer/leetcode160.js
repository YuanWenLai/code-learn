// 160. 相交链表

// 使用双指针，达到空间复杂度未O(1)

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    if(headA === null || headB === null) return null

    let APointer = headA
    let BPointer = headB

    while(APointer != BPointer) {
        // 走到尽头后，从另外一个链表中继续遍历
        APointer = APointer === null ? headB : APointer.next
        BPointer = BPointer === null ? headA : BPointer.next
    }

    return APointer

};