// 328. 奇偶链表


// 类似于快慢指针，用双指针来分别管理奇偶链表
// evenHead来保存偶链表的头部，便于奇偶链表的拼接

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var oddEvenList = function(head) {
  if(head == null)  return head
  let evenHead  = head.next
  let odd = head,
      even = evenHead

  while(even != null && even.next != null) {
      odd.next = even.next // 改变当前odd的指针指向
      odd = odd.next //odd.next = even.next,因此odd变成even.next
      even.next = odd.next // 改变当前even的指针指向
      even = even.next
  }
  // 拼接奇偶链表
  odd.next = evenHead
  return head
};