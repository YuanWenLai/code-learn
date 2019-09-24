import removeDup from '../../code/array/removeDuplicates'

test('简单去重',()=>{
  expect(removeDup([1,1,3,5])).toEqual([1,3,5])
})

test('简单去重1',()=>{
  expect(removeDup([0,0,1,1,1,2,2,3,3,4])).toEqual([0,1,2,3,4])
})

test('简单去重2',()=>{
  expect(removeDup([1,1,2])).toEqual([1,2])
})