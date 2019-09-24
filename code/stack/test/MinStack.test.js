import {MinStack} from '../MinStack'

test('1',()=>{
  let minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  console.log( minStack.getMin())

  minStack.pop();
  console.log(  minStack.top())
  console.log( minStack.getMin())
})