/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */

// 分治法，有误，在构建root的时候，传入的不应该是mid的list value
 var sortedListToBST = function(head) {
    if(!head) return null
    let length = 0
    let currentNode = head
    // calculate list length
    while(currentNode) {
        currentNode = currentNode.next
        length ++
    }
    
    var buildTree = function(start,end) {
        if(start > end) return null
        // get list middle node
        const mid = start+((end - start)>>1)
        const leftSide = buildTree(start,mid-1)

        const root = new TreeNode(head.val)
        head = head.next
        root.left = leftSide
        root.right = buildTree(mid+1,end)
        return root
    }

    return buildTree(0, length-1)
};


// 快慢指针
// 通过快慢指针来找到list的中间节点
// 快指针是慢指针的速度*2

var sortedListToBST2 = function(head) {
    if(!head) return null
    
    let slow = head,
        fast = head,
        preSlow = null
    
    while(fast && fast.next) {
        preSlow = slow
        fast = fast.next.next
        slow = slow.next
    }

    // 如果快指针到达尾部，则慢指针到达中间点
    // 通过中间点来构建树
    const root = new TreeNode(slow.val)

    if(preSlow) {
        // 剪掉preSlow对中间节点（root）的指向
        preSlow.next = null
        root.left = sortedListToBST2(head)
    }
    root.right = sortedListToBST2(slow.next)

    return root
};