//冒泡算法优化
//如果发现不再换位置，后面也不继续排序了，提高性能
export default (nums) => {
  let temp
  for (let i =0;i<nums.length-1;i++){
    let isSorted = true
    for (let j = 0;j<nums.length-1-i;j++){
      if(nums[j]>nums[j+1]){
        temp = nums[j]
        nums[j] = nums[j+1]
        nums[j+1] = temp
        isSorted = false
      }
    }
    if(isSorted){
      break;
    }
  }
  return nums
}