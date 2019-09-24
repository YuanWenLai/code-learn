export default (nums)=>{
  const arr = new Set(nums)
  const arr1 = [...arr]
  const len = [...arr].length
  var maxTh = 0
  if(len <= 2){
    for(let i =0;i<len;i++){
      if(maxTh<arr1[i]){
        maxTh = arr1[i]
      }
    }
    return maxTh
  }else{
    /*//计数排序
    let max =0, min = Number.MIN_VALUE
    for (let i =0;i<len;i++){
      if(arr1[i]>max) max = arr1[i]
      if(arr1[i]<min) min = arr1[i]
    }
    let countArr = new Array(max-min+1).fill(0)
    for(let i=0;i<len;i++){
      countArr[arr1[i]]++
    }
    let index = 0
    let sortedArr = new Array(len).fill(0)
    for(let i=0;i<countArr.length;i++){
      if(countArr[i] !== undefined){
        for (let k =0;k<countArr[i];k++){
          sortedArr[index++] = i
        }
      }
    }
    return sortedArr[len-3]*/
    //桶排序
    let max =0, min = Number.MIN_VALUE
    for (let i =0;i<len;i++){
      if(arr1[i]>max) max = arr1[i]
      if(arr1[i]<min) min = arr1[i]
    }
    //初始化桶
    const bucketNum = 5 //桶的个数
    let bucketSize = ~~((max-min+1)/bucketNum) //桶的大小
    let buckets = new Array(5) //需要考虑最大值的边界问题，因此加1，多一个桶
    for (let i=0;i<buckets.length;i++){
      buckets[i] = [] //桶就是个二维数组，初始化桶
    }
    for (let i=0;i<arr1.length;i++){
      buckets[~~((arr1[i]-min)/bucketSize)].push(arr1[i])
    }

    //4.对每个桶进行排序，并输出数据
    let sortedArr = []
    for (let i=0;i<buckets.length;i++){
      buckets[i].sort((a,b)=>a-b) //对每个桶进行排序
      for (let j =0;j<buckets[i].length;j++){
        sortedArr.push(buckets[i][j])
      }
    }
    return sortedArr[len-3]
  }
}