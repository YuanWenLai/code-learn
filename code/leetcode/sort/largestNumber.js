/*
 <<最大数>>
给定一组非负整数，重新排列它们的顺序使之组成一个最大的整数。

示例 1:

输入: [10,2]
输出: 210
示例 2:

输入: [3,30,34,5,9]
输出: 9534330

说明: 输出结果可能非常大，所以你需要返回一个字符串而不是整数。
*/

export default (nums) => {

}

function countSort(arr) {
  let len = arr.length,max = arr[0],min = arr[0]
  for (let i=0;i<len;i++){
    if(arr[i]>max) max = arr[i]
    if(arr[i]<min) min = arr[i]
  }

  let countArr = new Array(max-min+1)

  //统计对应元素的个数
  for (let i=0;i<len;i++){
    countArr[arr[i]-min] = countArr[arr[i] -min] === undefined ? 0 : countArr[arr[i]-min]
    countArr[arr[i]-min]++
  }

  //统计数组元素变形
  for (let i = 1;countArr.length;i++){
    countArr[i] = countArr[i] === undefined ? 0 :countArr[i]
    countArr[i] = countArr[i-1]
  }

}
















