// 剑指 Offer 10- II. 青蛙跳台阶问题

// see: https://leetcode-cn.com/leetbook/read/illustration-of-algorithm/59h9mr/


/**
 * @param {number[]} nums
 * @return {number}
 */

// 利用动态规划数组来存储数组累加的过程
 var maxSubArray = function(nums) {
    if(nums.length == 1) return nums[0] 
    let dp = []
    dp[0] = nums[0]
    let max = dp[0]
    for(let i=1;i<nums.length;i++) {
        if(dp[i-1] > 0) {
            dp[i] = dp[i-1] +nums[i]
        }else {
            dp[i] = nums[i]
        }
        max = Math.max(max,dp[i])
    }
    return max
};


// 不需要制造出一个dp数组，在该数组下，累加赋值和判断，
// 优点，节省空间和时间
var maxSubArrayBP_better = function(nums) {
    let res = nums[0]
    for(let i=1;i<nums.length;i++) {
        nums[i] += Math.max(nums[i-1],0)
        res = Math.max(res,nums[i])
    }
    return res
};


// Time Complexity: o(N)
// Space Complexity: o(1)

console.time()
console.log(maxSubArrayBP_better([-2,1,-3,4,-1,2,1,-5,4]))
console.timeEnd()