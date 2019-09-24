//桶排序
export default (arr,bucketNum)=>{
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
  let buckets = new Array(bucketNum+1) //需要考虑最大值的边界问题，因此加1，多一个桶
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