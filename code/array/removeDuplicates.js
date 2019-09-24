//方法一，用Set对象来去重
export default (arr) => {
  if(arr.length === 0){
    return 0
  }
  return [...new Set(arr)].length
}

//方法二

/*export default (nums)=>{
  for(let i=0;i<nums.length;i++){
    if(nums[i] === nums[i+1]){
      nums.splice(i,1)
      i--
    }
  }
  return nums
}*/

