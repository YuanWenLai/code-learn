export default (n,a,x,arr) => {
  let sumTime =0
  for (let i=0;i<arr.length;i++){
    sumTime += arr[i]
  }
  let quickWorkTimeSum = a*x*60
  if(sumTime<quickWorkTimeSum){
    let resultTime = Math.ceil(sumTime/a)
    if(resultTime>8*60){
      return 0
    }
    return resultTime
  }else if(sumTime > quickWorkTimeSum){
    let remainTime = sumTime - quickWorkTimeSum
    remainTime += quickWorkTimeSum/a
    if(remainTime>8*60){
      return 0
    }
    return remainTime
  }
}