//找到中位数
export default (num1,num2)=>{
  function test(a,b){
    return a - b
  }
  let sum = [...num1,...num2].sort(test)
  if(sum.length % 2 !== 0){
    return sum[Math.round(sum.length/2)-1]
  }else {
    return (sum[sum.length/2]+sum[sum.length/2-1])/2
  }
}