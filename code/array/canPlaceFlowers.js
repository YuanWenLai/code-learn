//可种花问题
export default (flowerbed , n) => {
  let max = 0
  if(flowerbed.length ===1 && flowerbed[0] === 0){
    return 1===n
  }
  for (let i =0; i<flowerbed.length  ; i++){
    if(flowerbed[i] === 0){
      if(i===0 && flowerbed[1] ===0){
        max++;
        i += 1
      }else if (flowerbed[i-1] === 0 && flowerbed[i+1] === 0) {
        max++;
        i += 1
      }else if(i ===flowerbed.length -1 && flowerbed[i-1] ===0){
        max++
      }
    }
  }
  return max>=n
}