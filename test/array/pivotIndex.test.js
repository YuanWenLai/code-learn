import pivotIndex from '../../code/array/pivotIndex'

test('pivotIndex',() => {
  expect(pivotIndex([1,7,3,6,5,6])).toEqual(3)
})

test('pivotIndex1',() => {
  expect(pivotIndex([1,7,3])).toEqual(-1)
})

test('pivotIndex2',() => {
  expect(pivotIndex([-1,-1,-1,-1,-1,0])).toEqual(2)
})

test('pivotIndex3',() => {
  expect(pivotIndex([-1,-1,-1,0,1,1])).toEqual(0)
})

test('pivotIndex4',() => {
  expect(pivotIndex([])).toEqual(-1)
})