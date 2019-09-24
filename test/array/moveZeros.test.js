import moveZeros from '../../code/array/moveZeroes'

test('moveZeros',()=>{
  expect(moveZeros([1,0,2,5,0])).toEqual([1,2,5,0,0])
})

test('moveZeros1',()=>{
  expect(moveZeros([1,0,0,2,5,0])).toEqual([1,2,5,0,0,0])
})