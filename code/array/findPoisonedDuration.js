//提莫攻击
export default (arr,num) =>{
  let sum =0
  //当数组为空，返回0
  if(arr.length === 0){
    return 0
  }
  //先计算上一次的攻击伤害
  //累计后，最后一次加一个完整的伤害
  for(let i =1;i<arr.length;i++){
      if(arr[i]-arr[i-1] >= num){
        sum += num
      }else {
        sum += arr[i]-arr[i-1]
      }
  }
  return sum+num
}