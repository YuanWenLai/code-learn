//获取最大公约数，
export default (a,b)=>{
 return betsGetGreatCommomDivisor(a , b)
}

//用辗转相除法
function getGreatCommonDivisor(a,b) {
  let max = a > b ? a :b
  let min = a < b ? a : b
  if(max % min === 0){
    return min
  }
  return getGreatCommonDivisor(max%min,min)
}

//更相减损法
function getGreatCommonDivisor2(a,b) {
  if(a === b){
    return a
  }
  let max = a > b ? a :b
  let min = a < b ? a : b
  return getGreatCommonDivisor2(max-min,min)
}

//求最大公约数的最优方法,详情见小灰算法P171
function betsGetGreatCommomDivisor(a,b) {
  if(a === b){
    return a
  }
  if((a&1)===0 && (b&1)===0){
    return betsGetGreatCommomDivisor(a>>1,b>>1)<<1
  }else if((a&1)===0 &&(b&1)!==0){
    return betsGetGreatCommomDivisor(a>>1,b)
  }else if((a&1)!==0 && (b&1)===0){
    return betsGetGreatCommomDivisor(a,b>>1)
  }else {
    let max = a>b ? a:b
    let min = a<b ? a:b
    return betsGetGreatCommomDivisor(max-min,min)
  }
}