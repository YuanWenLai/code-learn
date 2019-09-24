import largestRetangleArea from '../largestRectangleArea'

test('1',()=>{
  expect(largestRetangleArea([2,1,5,6,2,3])).toEqual(10)
})

test('2',()=>{
  expect(largestRetangleArea([0,9])).toEqual(9)
})

test('3',()=>{
  expect(largestRetangleArea([9,0])).toEqual(9)
})

test('4',()=>{
  expect(largestRetangleArea([6, 7, 5, 2, 4, 5, 9, 3])).toEqual(16)
})