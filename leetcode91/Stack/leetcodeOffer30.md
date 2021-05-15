### 思路 
 
数组模拟栈
1、用minArr来存储最小值，在对应值出栈时，minArr也要出栈
2、用 stack的数组模拟栈行为
### 代码 
 
 
``` js
var MinStack = function() {
    this.stack = []
    this.minArr = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if(this.minArr.length == 0 || x<=this.minArr[this.minArr.length -1]) {
        this.minArr.push(x)
    }
    this.stack.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let popNum = this.stack.pop()
    if(popNum == this.minArr[this.minArr.length -1]) {
        this.minArr.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length -1]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {

    return this.minArr[this.minArr.length -1] || 0
};

 
``` 
 
**复杂度分析** 
- 时间复杂度：O(1) 
- 空间复杂度：O（N）