// 239. 滑动窗口最大值

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
    // 维护单调栈的下标
    let indexStack = []

    let res = []

    for(let i = 0;i< nums.length;i++) {
        // 单调栈的最大值，是否是左值滑出的下标
        if(indexStack[0] < i - k+1) {
            indexStack.shift()
        }

        // 构建单调栈，栈小的出栈
        while(indexStack.length && nums[i] > nums[indexStack[indexStack.length -1]]) {
            indexStack.pop()
        }
        indexStack.push(i)

        if(i >= k-1) {
            res.push(nums[indexStack[0]])
        }
    }

   return res
};