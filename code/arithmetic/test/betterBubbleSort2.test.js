import betterBubbleSort2 from '../bubbleSort/betterBubbleSort2'

test('betterBubbleSort',()=>{
  expect(betterBubbleSort2([6,2,7,2,11,6,12,13,14])).toEqual([2, 2, 6, 6, 7, 11, 12, 13, 14])
})

test('betterBubbleSort1',()=>{
  expect(betterBubbleSort2([2,3,4,5,6,7,8,1])).toEqual([1,2,3,4,5,6,7,8])
})