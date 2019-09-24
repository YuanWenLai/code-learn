import kuaishou1 from '../code/kuaishou1'

test('1' ,()=>{
  expect(kuaishou1('10.10.10.10')).toEqual('IPV4')
})

test('2' ,()=>{
  expect(kuaishou1('2001:db8:85a3:0:0:8A2E:0307:7334')).toEqual('IPV6')
})