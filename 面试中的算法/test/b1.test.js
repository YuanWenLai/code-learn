import b1 from '../code/blibli1'

test('1',()=>{
  expect(b1('1+-2i','3+4i')).toEqual("11+-2i")
})

test('2',()=>{
  expect(b1('1+2i','2+1')).toEqual("0+5i")
})