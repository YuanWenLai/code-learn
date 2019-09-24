import reverse from '../../code/leetcode/reverse'

test('reverse1',()=>{
  expect(reverse(123)).toEqual(321)
})

test('reverse2',()=>{
  expect(reverse(-123)).toEqual(-321)
})