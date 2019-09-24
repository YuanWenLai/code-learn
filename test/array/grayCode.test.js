import gray from '../../code/array/grayCode'

test('gray',()=> {
  expect(gray(2)).toEqual([0,1,3,2])
})

test('gray1',()=> {
  expect(gray(1)).toEqual([0,1,])
})

test('gray2',()=> {
  expect(gray(0)).toEqual([0])
})

test('gray3',()=> {
  expect(gray(3)).toEqual([0,1,3,2,6,7,5,4])
})