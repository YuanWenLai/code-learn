import noRepeatStr from '../../code/leetcode/no-repeatStr'

test('noRepeatStr:abcabcbb',()=>{
  expect(noRepeatStr('abcabcbb')).toEqual(3)
})

test('noRepeatStr:pwwkew',()=>{
  expect(noRepeatStr('pwwkew')).toEqual(3)
})

test('noRepeatStr:pwwkwaer',()=>{
  expect(noRepeatStr('pwwkwaer')).toEqual(5)
})

test('noRepeatStr:',()=>{
  expect(noRepeatStr('')).toEqual(0)
})