/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
    var n = cost.length
    const dp = new Array(n+1)
    dp[0] = cost[0]
    dp[1] = cost[1]
    for(let i=2;i<n;i++) {
        dp[i] = Math.min(dp[i-1],dp[i-2])+cost[i]
    }
    return Math.min(dp[n-1],dp[n-2])
};

// 优化空间版本
var minCostClimbingStairs2 = function(cost) {
    dp[0] = cost[0]
    dp[1] = cost[1]
    for(let i=2;i<cost.length;i++) {
        let sum = Math.min(dp[0],dp[1])+cost[i]
        dp[0] = dp[1]
        dp[1] = sum
    }
    return Math.min(dp[0],dp[1])
};