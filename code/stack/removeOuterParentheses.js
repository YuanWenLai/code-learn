//1021. 删除最外层的括号
/*
* 1.最外层的（）不进入栈
* 2.循环一遍最外层的（），需跳过下一个‘（’，且重设L=1,R=0
* */

export default (str) => {
  let L=1,R=0
  let result = []
  for (let i=1;i<str.length;i++){
    if (str[i] == '('){
      L++
    } else {
      R++
    }
    if(R!=L){
      result.push(str[i])
    }else {
      i++
      L=1
      R=0
    }
  }
  return result.join('')
}