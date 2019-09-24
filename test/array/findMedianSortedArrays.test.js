import findMedianSortedArrays from '../../code/array/findMedianSortedArrays'

test('findMedianSortedArrays',()=>{
  expect(findMedianSortedArrays([1,3],[2])).toEqual(2)
})

test('findMedianSortedArrays2',()=>{
  expect(findMedianSortedArrays([1,2],[3,4])).toEqual(2.5)
})