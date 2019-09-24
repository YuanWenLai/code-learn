import plusOne from '../../code/array/plusOne'

test('plusOne',()=>{
  expect(plusOne([1,1,2])).toEqual([1,1,3])
})

test('plusOne1',()=>{
  expect(plusOne([0])).toEqual([1])
})

test('plusOne2',()=>{
  expect(plusOne([9,9])).toEqual([1,0,0])
})

test('plusOne3',()=>{
  expect(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])).toEqual([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4])
})

test('plusOne4',()=>{
  expect(plusOne([8,9])).toEqual([9,0])
})