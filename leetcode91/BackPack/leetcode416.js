// 416. 分割等和子集(01背包问题)

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canPartition = function(nums) {
    let sum = nums.reduce((pre,acc) => pre+acc)

    if(sum % 2 == 1) return false

    let target = sum/2
    let dp = new Array(target+1).fill(0)


    // 开始01背包
    for(let i=0;i<nums.length;i++) {
        for(let j= target;j>=nums[i];j--) {
            dp[j] = Math.max(dp[j],dp[j-nums[i]]+nums[i])
        }
    }

    // 若集中元素正好可以凑成和target
    return dp[target] == target
};