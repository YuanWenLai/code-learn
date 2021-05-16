// 剑指 Offer 30. 包含min函数的栈
/* 

定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。

*/

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
