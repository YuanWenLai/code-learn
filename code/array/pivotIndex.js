export default (nums) => {
  let sum = 0,tmp =[0]
  let i =0
  for(;i<nums.length;i++){
    sum += nums[i]
    tmp.push(sum)
  }
  for (i=0;i<nums.length;i++) {
    if(sum-nums[i]=== (2*tmp[i])){
      return i
    }
  }
  return -1
 /* if(nums.length === 0){
    return -1
  }
  let pivot = 0
  let leftSum = nums.shift()
  let rightSum =nums.pop()
  while (nums.length>1){
    if(Math.abs(leftSum)>=Math.abs(rightSum)){
      rightSum += nums.pop()
    }else {
      leftSum += nums.shift()
      pivot++
    }
  }
  return leftSum
  if(leftSum === rightSum){
    return pivot+1
  }
  return -1*/
}