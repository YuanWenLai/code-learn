import GroupSize from '../../code/array/hasGroupsSizeX'

test('groupSize',()=>{
  expect(GroupSize([1,2,3,4,4,3,2,1])).toEqual(true)
})

test('groupSize2',()=>{
  expect(GroupSize([1,1,2,2,2,2,3,3,3,3,3,3])).toEqual(true)
})

test('groupSize3',()=>{
  expect(GroupSize([1,1,1,2,2,2,3,3])).toEqual(false)
})

test('groupSize4',()=>{
  expect(GroupSize([1])).toEqual(false)
})

test('groupSize5',()=>{
  expect(GroupSize([0,0,0,0,0,1,1,2,3,4])).toEqual(false)
})

test('groupSize6',()=>{
  expect(GroupSize([1,1,1,1,2,2,2,2,2,2])).toEqual(true)
})
