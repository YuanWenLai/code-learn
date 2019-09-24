
//最小步数求Fibonacci
export default (n) => {
  let num =0,x=0
  while (num >= 0) {
    console.log(111)
   if(Fibonacci(num) >= n){
     x = Fibonacci(num)
     break
   }else {
     num++
   }
  }
  let y = Fibonacci(num -1)
  console.log(y,x,n)
  return Math.min(Math.abs(y-n),Math.abs(x - n))
}

function Fibonacci(n) {
  if(n == 0){
    return 0
  }else {
    if(n == 1){
      return 1
    }else {
      return Fibonacci(n-1)+Fibonacci(n-2)
    }
  }
}