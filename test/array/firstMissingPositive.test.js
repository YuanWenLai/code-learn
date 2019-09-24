import minNum from '../../code/array/firstMissingPositive'

test('min1',()=> {
  expect(minNum([1,2,0])).toEqual(3)
})

test('min2',()=> {
  expect(minNum([3,4,-1,1])).toEqual(2)
})

test('min3',()=> {
  expect(minNum([7,8,9,11,12])).toEqual(1)
})