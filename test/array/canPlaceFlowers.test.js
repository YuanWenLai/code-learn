import flowers from '../../code/array/canPlaceFlowers'

test('flowers',()=>{
  expect(flowers([1,0,0,0,0,0,1],1)).toEqual(true)
})

test('flowers2',()=>{
  expect(flowers([1,0,1,0,0,0,1],1)).toEqual(true)
})

test('flowers3',()=>{
  expect(flowers([1,0,0,0,1,1,1,0,0,0],4)).toEqual(false)
})

test('flowers5',()=>{
  expect(flowers([0,0,0,0,0,1,0,0,0],3)).toEqual(true)
})

test('flowers4',()=>{
  expect(flowers([1,0,0,0,1,0,0],2)).toEqual(true)
})

