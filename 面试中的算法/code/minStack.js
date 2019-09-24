
class MinStack {
  constructor(){
    this.minStack = []
    this.mianStack = []
  }
  //进栈处理
  pushStack(e){
    let len = this.minStack.length
    this.mianStack.push(e)
    if(len ===0 || e<= this.minStack[len-1]){
      this.minStack.push(e)
    }
  }

  //出栈处理
  popStack(){
    let len1 = this.mianStack.length
    let len2 = this.minStack.length
    if(this.minStack[len2-1] === this.mianStack[len1-1]){
      this.minStack.pop()
    }
    return this.mianStack.pop()
  }

  //获取最小栈
  getMin(){
    if(this.minStack.length ===0 ){
      return 'stack is enpty'
    }
    return this.minStack[this.minStack.length-1]
  }
}


export default ()=>{
  const stack = new MinStack()
  stack .pushStack(3)
  stack .pushStack(4)
  stack .pushStack(2)
  stack .pushStack(9)
  console.log(stack.getMin())
  stack.popStack()
  stack.popStack()
  console.log(stack.getMin())
  return stack.getMin()
}


