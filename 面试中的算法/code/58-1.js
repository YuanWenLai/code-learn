export default (str)=>{
  /*let stack = []
  let s = str.charAt(0)
  stack.push(s)
  for (let i=1;i<str.length;i++){
    let len = stack.length
    let curStr = str.charAt(i)
    console.log(curStr)
    console.log(stack[len-1])
    if (curStr !== stack[len-1]){
      stack.push(curStr)
    } else {
      stack.pop()
    }
  }
  return stack.length == 0*/
  var map = {
    "(": ")",
    "[": "]",
    "{": "}"
  }
  var leftArr = []
  for (var ch of str){
    if (ch in map) leftArr.push(ch); //为左括号时，顺序保存
    else { //为右括号时，与数组末位匹配
      console.log(leftArr)
      if(ch != map[leftArr.pop()]) return false;
    }
  }
  return !leftArr.length //防止全部为左括号
}