var MinStack = function () {
  this.data = []
  this.minArr = []
}

MinStack.prototype.push = function (x) {
  this.data.push(x)
  let len = this.minArr.length
  if(len==0 || x <= this.minArr[len-1]){
    this.minArr.push(x)
  }
}

MinStack.prototype.top = function () {
  let len = this.data.length
  return this.data[len-1]
}

MinStack.prototype.pop = function () {
  let popVal = this.data.pop()
  let len = this.minArr.length
  if(popVal == this.minArr[len-1]){
    this.minArr.pop()
  }
  return popVal
}

MinStack.prototype.getMin = function () {
  let len = this.minArr.length
  if(len == 0){
    return null
  }
  return this.minArr[len-1]
}

export {
  MinStack
}