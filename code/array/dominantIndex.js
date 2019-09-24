//  至少是其他数字两倍的最大数
export default (nums) => {
  let tmp = [].concat(nums)
  nums.sort(function (a,b) {
    return a-b
  })
  if(nums[nums.length-2]*2 <= nums[nums.length-1] || nums.length ===1){
    return tmp.indexOf(nums[nums.length-1])
  }
  return -1
}