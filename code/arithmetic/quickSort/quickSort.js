export default (nums) => {
 quickSort(nums,0,nums.length-1)
  return nums
}

function quickSort(nums,left,right) {
  if(left>=right){
    return
  }
  var partitionIndex
  left = typeof left === 'number' ? left : 0
  right = typeof right === 'number' ? right : nums.length-1
  partitionIndex = partition(nums,left,right) //获 得切分的基准值
  quickSort(nums ,left,partitionIndex-1)
  quickSort(nums,partitionIndex+1,right)
}

function partition(arr,start,end) {//分区操作
  //取第一个作为基准
  let piovt = arr[start]
  let mark = start

  for (let i = start+1;i<=end;i++){
    if(arr[i]<piovt){
      mark++
      let temp = arr[mark]
      arr[mark] = arr[i]
      arr[i] = temp
    }
  }
  arr[start] = arr[mark]
  arr[mark] = piovt
  return mark
}