### 思路 
 
数组模拟栈
1、初始化记录数据的数组和最大值
2、判断入栈时是否超出maxSize的长度
3、判断出栈时，栈是否为空
4、增量时，判断当前k值和栈的长度大小
 
 
### 代码 
 
 
``` js
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

 
``` 
 
**复杂度分析** 
- 时间复杂度：O(N) 
- 空间复杂度：O（N）