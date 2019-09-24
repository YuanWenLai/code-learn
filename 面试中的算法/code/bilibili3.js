export default (arr,n) => {
  let stack = []
  let result = []
  while (arr.length >= n){
    stack.push(arr.splice(0,n).reverse())
  }
  for (let i=0;i<stack.length;i++){
    result = [...result,...stack[i]]
  }
  result = [...result,...arr]
  return result.join('->')
}