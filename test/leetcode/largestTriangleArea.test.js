import largestArea from '../../code/leetcode/sort/largestTriangleArea'

test('1',()=>{
  expect(largestArea( [[0,0],[0,1],[1,0],[0,2],[2,0]])).toEqual(2)
})

test('2',()=>{
  expect(largestArea( [[4,6],[6,5],[3,1]])).toEqual(7.5)
})