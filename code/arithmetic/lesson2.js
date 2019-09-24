//选择排序
export default (arr) => {
  //方法一，数组索引相换
  /*let minIndex,temp
  for(let i =0;i<arr.length-1;i++){
    minIndex = i
    for(let j =i+1;j<arr.length;j++){
      if(arr[j]<arr[minIndex]){
        minIndex = j
      }
    }
    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr*/

  //方法二，元素相换
  let min,len = arr.length
  for (let i=0;i<len-1;i++){
    min = arr[i]
    for (let j=i+1;j<len;j++){
      if(arr[j]<min){
        let temp = min
        min = arr[j]
        arr[j] = temp
      }
    }
    arr[i] = min
  }
  return arr
}