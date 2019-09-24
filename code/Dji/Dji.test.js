import Dji1 from './Dji1'

test('1',()=>{
  expect(Dji1(8,2,8,[60,60,60,60,60,60,60,60])).toEqual(240)
})

test('2',()=>{
  expect(Dji1(4,3,3,[333,77,100,13])).toEqual(175)
})

test('3',()=>{
  expect(Dji1(4,3,3,[333,77,100,70])).toEqual(175)
})