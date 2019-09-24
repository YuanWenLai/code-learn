export default (nums,str)=>{
  ///[A-Z]/.test("A")
  let temp=[]
  let reg = /[A-Z]/
  let arr = str.split('')
  let sum=0
  for (let i=0;i<nums;i++){
    temp.push(reg.test(arr[i]))
  }
  for (let i = 0;i<temp.length;i++){
    if(temp[i]){
      if(!temp[i-1]){
        sum += 2
      }else {
        sum +=1
      }
    }else {
      sum += 1
    }
  }
  return sum
}