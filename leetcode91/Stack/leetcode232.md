### 思路 
 
1、用数组来维护一个队列
 
 
### 代码 
 
 
``` js

/**
 * @param {string} s
 * @return {string}
 */
 /**
 * Initialize your data structure here.
 */
 var MyQueue = function() {
    this.queue = []
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    if(x) this.queue.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.queue.shift()
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.queue[0]
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.queue.length == 0
};
 
``` 
 
**复杂度分析** 
- 时间复杂度：O(1) 
- 空间复杂度：O(N)