//冒泡排序
export default (arr) => {
  for (let i = arr.length -1;i>0;i--){
    for (let j=0;j<i;j++){
      let tmp;
      if(arr[j]>arr[j+1]){
        tmp = arr[j+1]
        arr[j+1] = arr[j]
        arr[j] = tmp
      }
    }
  }
  return arr
}

