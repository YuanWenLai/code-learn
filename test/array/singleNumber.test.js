import singleNumber from '../../code/array/singleNumber'

test('singleNumber',()=>{
  expect(singleNumber([2,2,1])).toEqual(1)
})

test('singleNumber1',()=>{
  expect(singleNumber([4,1,2,2,1])).toEqual(4)
})