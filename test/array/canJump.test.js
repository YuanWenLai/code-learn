import canJump from '../../code/array/canJump'

test("can1",()=>{
  expect(canJump([2,3,1,4])).toEqual(true)
})

test("can2",()=>{
  expect(canJump([3,2,1,0,4])).toEqual(false)
})

test("can3",()=>{
  expect(canJump([2,1,1,0])).toEqual(true)
})

test("can5",()=>{
  expect(canJump([2,5,0,0])).toEqual(true)
})