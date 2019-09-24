import sort from '../countSort/betterCountSort'

test('sort1',()=>{
  expect(sort([4,1,2,6,1,0])).toEqual([0, 1, 1, 2, 4, 6])
})

test('sort2',()=>{
  expect(sort([94,91,92,96,91,90])).toEqual([90, 91, 91, 92, 94, 96])
})