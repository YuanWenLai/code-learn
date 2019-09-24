import sort,{NodeList} from "../sortList";

test('1',()=>{
  let head = new NodeList([8,7,6,4,9,3,1,2,5])
  sort(head)
  let res = []
  let next = head
  while (next){
    res.push(next.val)
    next = next.next
  }
  expect(res).toEqual([1,2,3,4,5,6,7,8,9])
})