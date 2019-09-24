import addBinary from '../../code/string/addBinary'

test('addBinary',()=>{
  expect(addBinary('11','1')).toEqual('100')
})

test('addBinary1',()=>{
  expect(addBinary('1010','1011')).toEqual('10101')
})