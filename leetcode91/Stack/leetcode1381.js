// 1381. 设计一个支持增量操作的栈


/**
 * @param {number} maxSize
 */
 var CustomStack = function(maxSize) {
    this.data = []
    this.maxSize = maxSize
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if(this.data.length < this.maxSize) {
        this.data.push(x)
    }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    if(this.data.length === 0) return -1
    return this.data.pop()
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    k = this.data.length < k ? this.data.length : k
    for(let i=0;i<k;i++) {
        this.data[i] += val
    }
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */

const customStack = new CustomStack(3);
customStack.push(1)
customStack.push(2)
console.log(customStack.pop())