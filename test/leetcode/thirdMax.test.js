import thirdMax from '../../code/leetcode/sort/thirdMax'

test('1',()=>{
  expect(thirdMax([3,2,1])).toEqual(1)
})

test('2',()=>{
  expect(thirdMax([2,1])).toEqual(2)
})

test('3',()=>{
  expect(thirdMax([1,2,-2147483648])).toEqual(1)
})