//代金券组合
export default (price,len ,arr)=>{
  let sum =0
  for (let i=0;i<len;){
    let cur = arr[i]
    if(price >= cur){
      console.log(arr[i],price)
      price -= cur
        console.log(price)
      sum++
      if(price > cur){
        i=i
      }else {
        i++
      }
    }else {
      i++
    }
  }

  console.log(sum)
}
