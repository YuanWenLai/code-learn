import calPoints from '../calPoints'

test('1',()=>{
  expect(calPoints(["5","2","C","D","+"])).toEqual(30)
})

test('2',()=>{
  expect(calPoints(["5","-2","4","C","D","9","+","+"])).toEqual(27)
})