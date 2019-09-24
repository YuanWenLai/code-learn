import {NodeList} from "../singleList";

test('1',()=>{
  let list = new NodeList([8,7,6,4,9,3,1,2,5])
  //console.log(list.find(9))
  //list.insert(10,9)
  //list.remove(10)
  //list.swap(list.head,list.head.next.next)

  //快速排序链表
  /*list.sort(list.head)
  let res = []
  let next = list.head
  while (next){
    res.push(next.val)
    next = next.next
  }
  console.log(res)*/
  list.reserve()
  console.log(list)
  list.display()
})