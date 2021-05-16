### 思路 
 
1、利用求栈stack的最大值的思想，储存可分块的最大值
2、当出现小于栈顶head的值时，保留当前栈顶head，抛出stack中大于arr[i]的值
3、最终得出stack的长度的就可分块的最大值

思想和 769. 最多能完成排序的块 的题目一致
 
 
### 代码 
 
 
``` js
/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted2 = function(arr) {
    let stack = []
    for(let i=0;i<arr.length;i++) {
        let len = stack.length
        // 栈为空 or 栈顶小于当前值
        if(len == 0 || stack[len-1] <= arr[i]) {
            stack.push(arr[i])
        }else {
            // 保存栈顶的最大值为头，抛出大于当前值的栈内元素
            const head = stack.pop()
            while(stack[stack.length-1] > arr[i]) {
                stack.pop()
            }
            stack.push(head)
        }
    }
    return stack.length
};
 
``` 
 
**复杂度分析** 
- 时间复杂度：O(N) 
- 空间复杂度：O（N）