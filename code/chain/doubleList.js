//声明双向链表的节点
class Node {
  constructor(value){
    this.val = value
    this.next = null
    this.pre = null
  }
}

//声明双向链表
class DoubleList {
  constructor(arr){
    this.head = new Node(arr.shift())
    this.head.pre = null
    let cur = this.head
    arr.forEach(item => {
      cur.next = new Node(item)
      //新的节点pre指向还未改变的cur
      cur.next.pre = cur
      //改变cur变成新的节点
      cur = cur.next
    })
  }
  //展示链表
  display(){
    let cur = this.head
    while (cur != null){
      console.log(cur.val)
      cur = cur.next
    }
  }
  //寻找节点
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
    newNode.pre = cur
    cur.next.pre = newNode
    cur.next = newNode
  }
  //删除节点
  remove(item){
    let cur = this.find(item)
    //中间节点
    if(cur.next != null && cur.pre != null){
      cur.next.pre = cur.pre
      cur.pre.next = cur.next
      cur.next = null
      cur.pre = null
    }else if(cur.next == null){//删除为节点
      cur.pre.next = null
      cur.pre = null
    }else if(cur.pre == null){//删除头结点
      cur.next.pre = null
      this.head = cur.next
      cur.next = null
    }
  }

  //查询最后一个节点
  findLast(){
    let cur = this.head
    while (cur.next != null){
      cur = cur.next
    }
    return cur
  }

  //反向显示链表
  displayReverse(){
    let cur = this.findLast()
    while (cur.pre != null){
      console.log(cur)
      cur = cur.pre
    }
  }
}

export {
  Node,
  DoubleList
}