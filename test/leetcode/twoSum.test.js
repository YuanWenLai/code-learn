import twoSum from '../../code/leetcode/twoSum'

test('twoSum',()=>{
  expect(twoSum([2,7,11,15],9)).toEqual([0,1])
})

test('twoSum2',()=>{
  expect(twoSum([3,2,4],6)).toEqual([1,2])
})