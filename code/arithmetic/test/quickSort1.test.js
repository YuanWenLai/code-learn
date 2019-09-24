import quickSort1 from '../../arithmetic/quickSort/quickSort'

test('quickSort1',()=>{
  expect(quickSort1([4,7,3,5,6,2,8,1])).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
})