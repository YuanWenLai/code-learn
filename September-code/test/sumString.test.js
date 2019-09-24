import sumStrings from '../sumStrings'

test('1',()=>{
  expect(sumStrings('0189','00321')).toEqual('510')
})

test('2',()=>{
  expect(sumStrings('0','0')).toEqual('0')
})