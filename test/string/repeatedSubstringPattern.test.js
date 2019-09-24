import repeatedString from '../../code/string/repeatedSubstringPattern'

test('repeatedString',()=> {
  expect(repeatedString('abcabc')).toEqual(true)
})

test('repeatedString1',()=> {
  expect(repeatedString('aba')).toEqual(false)
})

test('repeatedString2',()=> {
  expect(repeatedString('abcabcabcabc')).toEqual(true)
})