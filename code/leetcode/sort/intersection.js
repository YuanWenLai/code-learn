//两个数组的交集
export default (nums1,nums2)=>{
  const arr = new Set(nums1)
  const arr2 = new Set(nums2)
  const arr3 = [...arr,...arr2]
  arr3.sort((a,b)=>a-b)
  var temp = []
  for(let i =0;i<arr3.length-1;i++){
    if(arr3[i] == arr3[i+1]){
      temp.push(arr3[i+1])
    }
  }
  return temp
}