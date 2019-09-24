//计数排序优化
export default (arr)=> {
  //1.先得到最大最小整数
  let len = arr.length,max=arr[0],min = arr[0]
  for (let i =0;i<len;i++){
    if(arr[i]>max){
      max = arr[i]
    }
    if(arr[i]<min){
      min = arr[i]
    }
  }
  //2.声明新的计数数组,初始化数组的元素都是undefined，（疯了）
  let conuntArr = new Array(max-min+1)
  //3.统计对应元素的个数
  for (let i=0;i<arr.length;i++){
    conuntArr[arr[i]-min] = conuntArr[arr[i]-min] === undefined ? 0 : conuntArr[arr[i]-min]
    conuntArr[arr[i]-min] ++
  }
  //[1, 2, 1, undefined, 1, undefined, 1]
  //4.统计数组变形，后面一个的元素 += 前面元素之和
  for (let i = 1;i<conuntArr.length;i++){
    conuntArr[i] = conuntArr[i] === undefined ? 0 : conuntArr[i]
    conuntArr[i] += conuntArr[i-1]
  }

  //5.倒叙遍历原始数列，从统计数组找到正确的位置，输出结果数组
  let sortedArr = new Array(arr.length)
  for (let i=arr.length-1;i>=0;i--){
    sortedArr[conuntArr[arr[i]-min] -1] =arr[i]
    conuntArr[arr[i]-min]--
  }
  return sortedArr
}