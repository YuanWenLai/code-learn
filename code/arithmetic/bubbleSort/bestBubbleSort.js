//冒泡算法的升级，鸡尾酒算法
export default (nums) => {
  let temp
  for (let i=0;i<nums.length/2;i++){
    let isSorted = true
    //判断是否奇数，奇数向右排序
      for (let j=i;j<nums.length-i-1;j++){
        if(nums[j]>nums[j+1]){
          temp = nums[j]
          nums[j] = nums[j+1]
          nums[j+1] = temp
          isSorted = false
        }
      }
      if(isSorted){
        break
      }
      //判断是否偶数，向左排序,isSorted重新标记为true
      isSorted = true
      for (let j=nums.length-i-1;j>0;j--){
        if(nums[j-1]>nums[j]){
          temp = nums[j-1]
          nums[j-1] = nums[j]
          nums[j] = temp
          isSorted = false
        }
      }
      if(isSorted){
        break
      }

  }
  return flag
}