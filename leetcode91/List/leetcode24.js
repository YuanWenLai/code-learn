// 24. 两两交换链表中的节点
const { List } = require('./List.js')
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
    
    if(!head || !head.next) return head
    const dummyHead = new ListNode(-1, head)
  
    let slow = head, fast = head.next, preSlow = dummyHead;
    //穿针引线 
    while(fast){
      let next = fast.next;
      preSlow.next = fast;
      fast.next = slow;
      slow.next = next;
  
      preSlow = slow
      slow = next
      if(!slow) break
      fast = slow.next
    }
  
    return dummyHead.next
  };

swapPairs()