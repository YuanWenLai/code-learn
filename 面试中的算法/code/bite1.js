//要求n^2
const ret =[]
export default (len,arr,k) => {
  
  for (let i=0;i<len;i++){
    let curNum1 = arr[i]
    for (let j=i+1;j<len-1;j++){
      let curNum2 = arr[j]
      for (let y=j+1;y<len-1;y++){
        let curNum3 = arr[y]
        if(curNum1+curNum2+curNum3 < k){
          ret.push([curNum1,curNum2,curNum3])
        }
      }
    }
  }
  return ret
}