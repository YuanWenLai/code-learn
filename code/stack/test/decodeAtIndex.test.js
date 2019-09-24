import decodeAtlndex from '../decodeAtIndex'

test('1',()=>{
  expect(decodeAtlndex('leet2code3',10)).toEqual('o')
})

test('2',()=>{
  expect(decodeAtlndex("a2345678999999999999999",1)).toEqual('a')
})

test('3',()=>{
  expect(decodeAtlndex("ha22",5)).toEqual('h')
})