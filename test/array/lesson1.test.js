import telComb from '../../code/array/lesson1'


test('telComb:23',()=> {
  expect(telComb('23')).toEqual(['ad','ae','af','bd','be','bf','cd','ce','cf'])
})

test('telComb:458',()=> {
  expect(telComb('458')).toEqual(["gjt", "gju", "gjv", "gkt", "gku", "gkv", "glt", "glu", "glv", "hjt", "hju", "hjv", "hkt", "hku", "hkv", "hlt", "hlu", "hlv", "ijt", "iju", "ijv", "ikt", "iku", "ikv", "ilt", "ilu", "ilv"])
})
