import removeDuplicates from '../removeDuplicates'

test('1',()=>{
  expect(removeDuplicates('abbaca')).toEqual('ca')
})

test('2',()=>{
  expect(removeDuplicates('abddbagaccg')).toEqual('gag')
})