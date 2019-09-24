export default (date) => {
  let months = [31,28,31,30,31,30,31,31,30,31,30,31]
  let [year,month,day] = date.split('-').map(value => Number(value))
  let sum = 0
  months.forEach((v,index)=>{
    if(index <month -1){
      sum += v
      if(index === 1 && isLeap(year)){
        sum += 1
      }
    }
  })
  sum += day
  return sum
}

const isLeap = function(year){
  if((year%4==0 && year %100 || year%400 ==0)){
    return true
  }
  return false
}