// 42. 接雨水

/**
 * @param {number[]} height
 * @return {number}
 */

// dp
// **复杂度分析** - 时间复杂度：O(N)  - 空间复杂度：O（N）
 var trap1 = function(height) {
    const len = height.length

    if(len == 0) return 0

    // 拟造左最大值
    const leftMax = new Array(len).fill(0)
    leftMax[0] = height[0]
    for(let i=1;i<len;i++) {
        // 一直存储左最大值
        leftMax[i] = Math.max(leftMax[i-1],height[i])
    }

    // 拟造右最大值
    const rightMax = new Array(len).fill(0)
    rightMax[len - 1] = height[len - 1]
    for(let i = len -2;i>=0;i--) {
        // 一直存储右最大值
        rightMax[i] = Math.max(rightMax[i+1],height[i])
    }

    // 遍历计算接雨水面积
    let res
    for(let i=0;i<len;i++) {
        // 比较左右值的最小值，减去当前序号的面积，等于积水面积
        res += Math.min(leftMax[i],rightMax[i]) - height[i]
    }

    return res
};



// 单调栈
// **复杂度分析** - 时间复杂度：O(N)  - 空间复杂度：O（N）
var trap2 = function(height) {
    let res = 0
    const stack = []
    const len = height.len
    for(let i=0;i<len;i++) {
        while(stack.length && height[i] > height[stack[stack.length - 1]]) {
            const top = stack.pop()
            if(!stack.length) break

            const left = stack[stack.length - 1]
            const curWidth = i - left -1
            const curHeight = Math.min(height[left], height[i]) - height[top]

            res += curHeight * curWidth
        }

        stack.push(i)
    }

    return res
};

// see:https://leetcode-cn.com/problems/trapping-rain-water/solution/jie-yu-shui-by-leetcode-solution-tuvc/



// 双指针
// **复杂度分析** - 时间复杂度：O(N)  - 空间复杂度：O（1）
var trap3 = function(height) {
    let res = 0
    let left = 0
    let right = height.length - 1
    let leftMax = 0, rightMax = 0

    while(left < right) {
        // 记录左区间和右区间的最大值
        leftMax = Math.max(leftMax, height[left])
        rightMax = Math.max(rightMax, height[right])
        
        // 用左区间或右区间的最大减去当前的高度值，得到雨水面积
        if(height[left] < height[right]) {
            res += leftMax - height[left]
            ++left
        }else {
            res += rightMax - height[right]
            --right
        }
    }

    return res
};
