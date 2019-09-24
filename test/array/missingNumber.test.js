import missingNumber from '../../code/array/missingNumber'

test('missingNumber',()=>{
  expect(missingNumber([0,1,2])).toEqual(3)
})

test('missingNumber1',()=>{
  expect(missingNumber([0,1,3])).toEqual(2)
})

test('missingNumber3',()=>{
  expect(missingNumber([1,2,4,3,0,6])).toEqual(5)
})