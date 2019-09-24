export default (nums) => {
 /* for (let i = 0;i<nums.length;i++){
    if(nums.indexOf(i)<0){
      return i
    }
  }
  return nums.length*/

 /*//方法二 用高斯求和
  let expectedSum = nums.length*(nums.length+1)/2
  let actualSum = 0
  for (let i of nums) actualSum += i
  return expectedSum - actualSum*/

 //方法三，位运算
  let miss = nums.length
  for (let i = 0;i<nums.length;i++){
    miss ^= i^nums[i]
  }
  return miss
}