import largestP from '../../code/leetcode/sort/largestPerimeter'


test('11',()=>{
  expect(largestP([2,1,2])).toEqual(5)
})

test('12',()=>{
  expect(largestP([3,6,2,3])).toEqual(8)
})

test('13',()=>{
  expect(largestP([1,2,2,4,18,8])).toEqual(5)
})