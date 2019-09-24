import bestBubbleSort from '../bubbleSort/bestBubbleSort'

test('bestBubbleSort',()=>{
  expect(bestBubbleSort([52,1,5,7,8,9,1])).toEqual([1,1,5,7,8,9,52])
})

test('bestBubbleSort1',()=>{
  expect(bestBubbleSort([2,3,4,5,6,7,8,1])).toEqual([1,2,3,4,5,6,7,8])
})