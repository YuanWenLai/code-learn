//声明链表节点
class Node {
  constructor(value){
    this.val = value
    this.next = undefined
  }
}
//声明链表
class NodeList {
  constructor(arr){
    this.head = new Node(arr.shift())
    let next = this.head
    arr.forEach(item => {
      next.next = new Node(item)
      next = next.next
    })
  }

  //查找节点
  find(item){
    let cur = this.head
    while (cur.val != item){
      cur = cur.next
    }
    return cur
  }
  //插入节点
  insert(newVal,item){
    let newNode = new Node(newVal)
    let cur = this.find(item)
    newNode.next = cur.next
    cur.next = newNode
  }
  //展示List
  display(){
    let cur = this.head
    while (cur != null){
      console.log(cur.val)
      cur = cur.next
    }
  }
  //查找上一个节点
  findPre(item){
    let cur = this.head
    while (cur != null && cur.next.val != item){
      cur = cur.next
    }
    return cur
  }
  //删除节点
  remove(item){
    let pre = this.findPre(item)
    if(pre.next !== null){
      pre.next = pre.next.next
    }
  }
  //反转单链表
  reserve(){
    let p = this.head
    let q = p.next
    let r
    //反转
    p.next = null
    while (q != null){
      r = q.next
      q.next = p
      p = q
      q = r
    }
    this.head = p
  }
  /*快速排序链表*/
  //交换节点
  swap(p,q){
    let val = p.val
    p.val = q.val
    q.val = val
  }
  //寻找基准元素的节点
  partion(begin,end){
    let val = begin.val
    let p = begin
    let q = begin.next
    while (q !== end){
      if(q.val < val){
        this.swap(p.next,q)
        p = p.next
      }
      q = q.next
    }
    //一轮排序后，让基准元素位于中间
    this.swap(p,begin)
    return p
  }
  sort(begin,end) {
    if(begin !== end){
      let part = this.partion(begin,end)
      this.sort(begin,part)
      this.sort(part.next,end)
    }
  }
}


export {
  Node,
  NodeList
}
