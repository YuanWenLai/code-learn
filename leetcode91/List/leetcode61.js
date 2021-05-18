// 61. 旋转链表


var rotateRight = function(head, k) {
    if(!head || !head.next || k === 0) return head;
  
    let length = 1, cur = head;
  
    //找出长度
    while(cur.next){
      cur = cur.next
      length++
    }
  
    //找出真实的k的次数
    k = k % length;
    //如果次数是0，那么就等于没干，并且如果k = 0 后面会报错
    if(k === 0) return head;
  
    //快慢指针，让快的先走 k - 1步，这样慢的就刚好是newHead，快的刚好是现在的尾巴
    let fast = head, slow = head, count = k - 1;
  
    while(count > 0){
      fast = fast.next
      count--
    }
  
    let pre = null;
    while(fast.next){
      pre = slow
      fast = fast.next
      slow = slow.next
    }
  
    pre.next = null;
    fast.next = head;
    return slow
  };

// 快慢指针来旋转链表
// 向右移动 k 个位置，取k相对链表长度的模，例如500m赛道，跑100m和1100m都相对起点移动同样的距离

var rotateRight2 = function(head, k) {
  if(!head || !head.next || k === 0) return head;

  let length = 0, cur = head;

  while(cur) {
    cur = cur.next
    length++
  }

  // 取模移动的k值
  k = k % length
  let slow = head,
      fase = head
  // 遍历list，slow让fast k步
  while(fast.next) {
    // k > 0时，slow先别动
    if(k-- <= 0) {
      // k <= 0时，才可以起跑
      slow = slow
    }
    fast = fast.next
  }

  // 已经标记完slow和fast的位置了，进行链表的拼接工作
  fast.next = head
  let fastHead = slow.next
  // 清除slow对快队列的关系
  slow.next = null

  return fastHead


};