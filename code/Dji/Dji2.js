export default (n,t,arr) =>{
  let remainMoney = t
  let happy = 0
  let pirceArr = []
  arr.sort((a,b)=>a[1]-b[1]) //根据满意度排序

  for (let i=0;i<arr.length;i++){
    pirceArr.push(arr[i][0])
    for (i in pirceArr){
      if(remainMoney<i){
        return remainMoney
      }
    }
    if(Math.floor(remainMoney/arr[i][0])<arr[i][2]){
      remainMoney -= Math.floor(remainMoney/arr[i][0])*arr[i][0]
      happy += arr[i][1] *  Math.floor(remainMoney/arr[i][0])
      n--
    }else {
      remainMoney -= arr[i][2]*arr[i][0]
      n--
    }
  }
}