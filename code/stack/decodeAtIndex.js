//880. 索引处的解码字符串


//1.数组太大会爆栈
/*
export default (str,k) =>{
  let result = []
  for (let i=0 ;i<str.length;i++){
    let char = str[i]
    if(!Number.isInteger(char*1)){
      result.push(char)
    }else {
      let temp = [...result]
      for (let j=1;j<char*1;j++){
         temp = [...temp,...result]
      }
      result = temp
    }
    if(result.length>=k){
      return result[k-1]
    }
  }
}*/

//2.优化2
export default (str,k) => {
  let size = 0
  let N = str.length
  //算出最终的重复子串
  for (let i=0;i<N;++i){
    let c = str[i]
    if(Number.isInteger((c*1))){
      size *= c -'0'
    }else {
      size++
    }
  }

  for (let j=N-1;j>=0;--j){
    console.log(size)
    let c = str[j]
    k %= size
    if(k==0 && !Number.isInteger((c*1))){
      return c
    }
    if(Number.isInteger((c*1))){
      size /= c-'0'
    }else {
      size--
    }
  }
}