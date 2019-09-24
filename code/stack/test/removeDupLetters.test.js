import removeDupL from '../removeDuplicateLetters'

test('1',()=>{
  expect(removeDupL('bcabc')).toEqual('abc')
})
test('2',()=>{
  expect(removeDupL("cbacdcbc")).toEqual('acdb')
})