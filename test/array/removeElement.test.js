import removeElement from '../../code/array/removeElement'

test('remove1',()=>{
  expect(removeElement([1,2,1,4,6],1)).toEqual([2,4,6])
})

test('remove2',()=>{
  expect(removeElement([3,2,2,3],3)).toEqual([2,2])
})