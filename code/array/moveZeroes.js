//移动零
export default (nums)=>{
  let len = nums.length
  for (let i =0;i<len;){
    if(nums[i] === 0){
      nums.splice(i,1)
      nums.push(0)
      len--
    }else i++
  }
  return nums
}