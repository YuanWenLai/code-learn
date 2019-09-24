import betterBubbleSort from '../bubbleSort/betterBubbleSort'

test('betterBubbleSort',()=>{
  expect(betterBubbleSort([5,1,5,8,2,1,5,7])).toEqual([1,1,2,5,5,5,7,8])
})