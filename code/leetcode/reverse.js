export default (x) => {
  let flag;
  if(x<0){
    x = -x;
    flag=0
  }
  let arr = x.toString().split('')
  if(arr[1] === 0){
    arr.shift(arr[1])
  }
  let ret = parseInt(arr.reverse().join(''))
  if(ret<Math.pow(-2,31) || ret>Math.pow(2,31)-1){
    return 0
  }
  if(flag===0){
    return -ret
  }
  return ret
}