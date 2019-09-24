export default (nums) => {
  //这种方法不符合题意，js的sort的时间复杂度是nlogn
  /*
  *你可以假设数组中所有元素都是非负整数，且数值在 32 位有符号整数范围内。
    请尝试在线性时间复杂度和空间复杂度的条件下解决此问题。
  * */
  /*if(nums.length < 2) {return 0}
  nums.sort((a,b)=>a-b)
  let max = 0
  for (let i=0;i<nums.length-1;i++){
    let sub = nums[i+1]-nums[i]
    if(sub>max){max = sub}
  }
  return max*/

  let max =0
  let sortedArr = bucketSort(nums,~~(nums.length/2))
  for(let i=0;i<sortedArr.length-1;i++){
    let sub = sortedArr[i+1]-sortedArr[i]
    if(sub>max){max = sub}
  }
  return max
}

//桶排序
function bucketSort(arr,bucketNum){
  if(arr.length === 0){
    return arr
  }
  //1.找出最大最小值
  let i =0, min = arr[0],max = arr[0]
  for (let i =0;i<arr.length;i++){
    if(arr[i]>max) max = arr[i]
    if(arr[i]<min) min = arr[i]
  }
  //2.桶的初始化

  bucketNum = bucketNum || 5  //桶的个数
  let bucketSize = ~~((max-min+1)/bucketNum) //桶的大小
  let buckets = new Array(bucketNum*2) //需要考虑最大值的边界问题，因此加1，多一个桶
  for (i=0;i<buckets.length;i++){
    buckets[i] = [] //桶就是个二维数组，初始化桶
  }
  //3.分配数据到桶，这里直接按照数据值的分布来分配,一定范围内均匀分布的数据效率最为高效~~((arr[i]-min)/bucketSize)
  for (i=0;i<arr.length;i++){
    buckets[~~((arr[i]-min)/bucketSize)].push(arr[i])
  }

  //4.对每个桶进行排序，并输出数据
  let sortedArr = []
  for (i=0;i<buckets.length;i++){
    buckets[i].sort((a,b)=>a-b) //对每个桶进行排序
    for (let j =0;j<buckets[i].length;j++){
      sortedArr.push(buckets[i][j])
    }
  }
  return sortedArr
}

/*

//计数排序
function countSort(arr){
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
}*/
