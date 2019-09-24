export default (nums)=>{
  if(nums.indexOf(0) === -1 || nums.length <= 1){
    return true
  }
  for (let i=0;i<nums.length-1;i++){
    if(nums[i] ===0){
      if(!canPassZero(nums,i)){
        return false
      }
    }
  }
  return true
}
//检验这个0是否可以跳过
function canPassZero(nums,i) {
  for (let index = i-1;index >-1;index--){
    //如果后退一位的值加这个位数，能大于0的位置，则这个0可以被跳过
    let num = nums[index]
    if(num+index > i){
      return true
    }
  }
  return false
}