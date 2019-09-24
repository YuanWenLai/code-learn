/*
* 给定一个非空整数数组，
* 除了某个元素只出现一次以外，
* 其余每个元素均出现两次。找出那个只出现了一次的元素。
* */

//只出现一次的数字
export default (nums) => {
 /* nums.sort()
  for (let i=0;i<nums.length;){
    if(nums[i]===nums[i+1]){
      i += 2
    }else return nums[i]
  }*/

 //方法二异或操作
  let a =0
  for (let i of nums) a^=i
  return a
}