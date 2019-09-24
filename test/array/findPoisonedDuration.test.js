import findDuration from '../../code/array/findPoisonedDuration'

test('findDuration',()=>{
  expect(findDuration([1,4],2)).toEqual(4)
})

test('findDuration2',()=>{
  expect(findDuration([1,2],2)).toEqual(3)
})

test('findDuration3',()=>{
  expect(findDuration([1,2,3,4,5],5)).toEqual(9)
})