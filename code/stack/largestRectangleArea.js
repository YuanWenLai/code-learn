//84. 柱状图中最大的矩形（8-31）
/*
* 1.维护一个栈，-1作为初始栈的顶部
* 2.不断将数组的序号进栈，直到相邻的柱子有下降趋势arr[i]<arr[i-1]
* 3.抛出栈顶，计算刚抛出的面积arr[stack.pop()]*(i-stack[stack.length-1]-1)，求最大max
* 4.剩下最小柱子的栈，来一个个抛出，arr[stack.pop()]*(arr.length-stack[stack.length-1]-1)
* */

export default (arr) => {
  let stack = []
  stack.push(-1)
  let maxArea = 0
  for (let i=0;i<arr.length;++i){
    while (stack[stack.length-1] !== -1 && arr[stack[stack.length-1]] > arr[i]){
      maxArea = Math.max(maxArea , arr[stack.pop()]*(i-stack[stack.length-1]-1))
    }
    stack.push(i)
  }
  while (stack[stack.length-1] !== -1){
    maxArea = Math.max(maxArea , arr[stack.pop()]*(arr.length-stack[stack.length-1]-1))
  }
  return maxArea
}