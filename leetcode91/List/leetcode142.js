// 142. 环形链表 II

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 用哈希表来存储遍历过的节点，若出现一致，则抛出该节点
 var detectCycle = function(head) {
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