//删除字符串中的所有相邻重复项

//1.用递归实现，速度慢
/*
export default (str)=>{
  return remove(str)
}
function remove(str) {
  let arr = str.split('')
  for (let i=0;i<arr.length-1;i++){
    if(arr[i] == arr[i+1]){
      arr.splice(i,2)
      return remove(arr.join(''))
    }
  }
  return str
}*/

//2.用栈实现
export default (str) => {
  let arr = str.split('')
  let result = []
  let pre
  for (let i=0;i<arr.length;i++){
    if(result.length){
      pre = result.pop()
      if(arr[i] != pre){
        result.push(pre,arr[i])
      }
    }else {
      result.push(arr[i])
    }
  }
  return result.join('')
}