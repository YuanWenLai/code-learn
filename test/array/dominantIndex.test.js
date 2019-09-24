import dominantIndex from '../../code/array/dominantIndex'

test('dominant1',()=>{
  expect(dominantIndex( [3, 6, 1, 0])).toEqual(1)
})

test('dominant2',()=>{
  expect(dominantIndex( [0,0,0,1])).toEqual(3)
})

test('dominant3',()=>{
  expect(dominantIndex( [1])).toEqual(0)
})

test('dominant4',()=>{
  expect(dominantIndex( [1,2,16,35,44,100,27,0])).toEqual(5)
})