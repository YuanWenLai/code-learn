export default (nums,target)=>{
  if (nums.length < 3){
    return
  }
  nums.sort((a,b)=>a-b)
  let res = nums[0]+nums[1]+nums[nums.length-1]
  for(let middele =1;middele<nums.length-1;middele++){
    let start = 0
    let end = nums.length-1
    while (start<middele && end>middele){
      let ret = nums[start] + nums[middele] + end[end]
      if(Math.abs(target-ret)< Math.abs(target-res)){
        res=ret
      }
      if (ret = target){
        return ret
      }
      if(ret<target){
        start += 1
      }
      if(ret>target){
        end -=1
      }
    }
  }
  return res
}