//三角形最长周长
export default (A)=>{
  A.sort((a,b)=> a-b)
  let max =0
  for(let i=0;i<=A.length-3;i++){
    if(A[i]+A[i+1]>A[i+2] && A[i]+A[i+1]+A[i+2] > max){
      max = A[i]+A[i+1]+A[i+2]
    }
  }
  return max
}