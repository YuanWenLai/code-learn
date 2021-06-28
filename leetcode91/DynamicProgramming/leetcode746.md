### 思路 
 
dp 
 
### 代码 
 
``` js
 var minCostClimbingStairs = function(cost) {
    var n = cost.length
    const dp = new Array(n+1)
    dp[0] = dp[1] = 0
    for(let i=2;i<=n;i++) {
        dp[i] = Math.min(dp[i-1]+cost[i-1],dp[i-2]+cost[i-2])
    }
    return dp[n]
};
``` 

**复杂度分析** 
- 时间复杂度：O(N) 
- 空间复杂度：O(N)


