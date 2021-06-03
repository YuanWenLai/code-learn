// 234. 回文链表

// 思路：先将单链表变成双链表，用双指针相向移动

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    if(!head) return null

    let headPointer = head
    let tailPointer = head

    // 制作双指针
    while(tailPointer.next) {
        tailPointer.next.pre = tailPointer
        tailPointer = tailPointer.next
    }

    //双指针相向遍历
    while(headPointer !== tailPointer) {
        if(headPointer.next != tailPointer) {
            // 如果双指针的值相同，是回文，否则不是
            if(headPointer.val == tailPointer.val) {
                headPointer = headPointer.next
                tailPointer = tailPointer.pre
            } else {
                return false
            }
        }else {
            // 偶数情况下，若是头指针的下一个节点是尾节点，遍历完成
            return headPointer.val === tailPointer.val
        }
    }
    return true
};