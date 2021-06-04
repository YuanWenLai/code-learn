// 209. 长度最小的子数组

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
    const len = nums.length
    if(len == 0) return 0

    let maxVal = Number.MAX_VALUE
    let l = 0
    let r = 0
    let sum = 0

    while(r < n) {
        sum += nums[r]
        // 若sum >= target,左移更新子数组的最小长度
        while(sum >= target) {
            maxVal = Math.min(maxVal,r-l+1)
            sum -= nums[l]
            l++
        }

        // 若sum < target,右移更新子数组的最小长度
        r++
    }

    return maxVal === Number.MAX_VALUE ? 0 : maxVal
};


// see:https://leetcode-cn.com/problems/minimum-size-subarray-sum/solution/chang-du-zui-xiao-de-zi-shu-zu-by-leetcode-solutio/