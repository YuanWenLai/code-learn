export default (num1,num2) => {
  let res ='',c=0
  num1 = num1.split('')
  num2 = num2.split('')
  while (num1.length || num2.length || c){
    c += ~~num1.pop() + ~~num2.pop()
    res = c % 10 +res
    c = c>9
  }
  if(res.length == 1){
    return res
  }
  return res.replace(/^0+/,"")
}