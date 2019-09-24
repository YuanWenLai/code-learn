//冒泡排序有时会出现，后一部分已经是有序的，如果再进行排序，会白白浪费几轮性能
//创造无序边界作为标记
//继续沿用是否标记完成作为完成标记

export default (nums)=>{
  //1.一开始定义无序标记为全部
  let sortborder = nums.length-1 ,lastSortBorder=0
  let temp

  for(let i=0;i<nums.length-1;i++){
    let isSorted = true
    for (let j=0;j<sortborder;j++){
      if(nums[j]>nums[j+1]){
        temp = nums[j]
        nums[j] = nums[j+1]
        nums[j+1] = temp

        //因为有元素交换
        isSorted = false
        //记录最后一次交换的边界
        lastSortBorder = j
      }
    }
    sortborder = lastSortBorder
    if(isSorted){
      break;
    }
  }
  return nums
}