//计数排序1
export default (arr) =>{
  //1.先得到最大最小整数
  let len = arr.length,max=0,min = Number.MIN_VALUE
  for (let i =0;i<len;i++){
    if(arr[i]>max) max = arr[i]
    if(arr[i]<min) min = arr[i]
  }
  //2.声明新的计数数组,初始化数组的元素都是undefined，（疯了）
  let conuntArr = new Array(max-min+1)
  //3.遍历数组，填充统计数组
  for (let j=0;j<arr.length;j++){
    conuntArr[arr[j]]= conuntArr[arr[j]] ===undefined? 0 : conuntArr[arr[j]]
    ++conuntArr[arr[j]]
  }

  //4.遍历统计数组，输出结果
  let index = 0
  let sortedArr = new Array(arr.length)
  for(let i=0;i<conuntArr.length;i++){
    if(conuntArr[i] !== undefined){
      for (let k =0;k<conuntArr[i];k++){
        sortedArr[index++] = i
      }
    }
  }
  return sortedArr
}