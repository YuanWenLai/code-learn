export default (str) => {
  let max =1
  if(str === ''){
    max = 0
  }else {
    let arr = str.split('')
    for(let i= 0,tmp=[];i<arr.length;i++){
      tmp.push(arr[i])
      for (let j =i+1;j<arr.length;j++){
        if(!tmp.includes(arr[j])){
          tmp.push(arr[j])
          max =Math.max(max,j-i+1);
        }else {
          break;
        }
      }
      tmp.length = 0;
    }
  }
  return max
}