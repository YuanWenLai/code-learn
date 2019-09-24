import sort from '../bubbleSort/bubbleSort'

test('sort',() => {
  expect(sort([2,5,7,8,12,4,1])).toEqual([1,2,4,5,7,8,12])
})