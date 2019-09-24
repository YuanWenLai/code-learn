import b3 from '../code/bilibili3'
import demo58 from '../code/58-1'

test('1',()=>{
  expect(b3([1,2,3,4,5],2)).toEqual('2->1->4->3->5')
})

test('2',()=>{
  expect(demo58("()[]{}")).toEqual(false)
})