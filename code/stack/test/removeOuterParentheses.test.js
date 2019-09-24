import removeOuterParentheses from '../removeOuterParentheses'

test('1',()=>{
  expect(removeOuterParentheses("(()())(())")).toEqual("()()()")
})