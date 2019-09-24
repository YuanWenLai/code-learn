import tw from '../code/tw1'

test('1',()=>{
  expect(tw(2,2,['G-GR-','G--FG','FG--R','RGF--'])).toEqual(['GG','FF'])
})