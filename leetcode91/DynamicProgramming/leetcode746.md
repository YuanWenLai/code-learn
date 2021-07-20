### 思路 
 
dp 
 
### 代码 
 
``` js
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
        dp[i] = Math.min(dp[i-1],dp[i-2])+cost[i] // 加上cost，是该步数花费的值
    }
    // 因为可以跳一步或者两步，所以要比较最后两位的值
    return Math.min(dp[n-1],dp[n-2])
};
``` 

**复杂度分析** 
- 时间复杂度：O(N) 
- 空间复杂度：O(N)



### 代码 2
 
``` js
// 优化空间版本
var minCostClimbingStairs2 = function(cost) {
    const dp = new Array(2)
    dp[0] = cost[0]
    dp[1] = cost[1]
    for(let i=2;i<cost.length;i++) {
        let sum = Math.min(dp[0],dp[1])+cost[i]
        dp[0] = dp[1]
        dp[1] = sum
    }
    return Math.min(dp[0],dp[1])
};
``` 

**复杂度分析** 
- 时间复杂度：O(N) 
- 空间复杂度：O(1)



