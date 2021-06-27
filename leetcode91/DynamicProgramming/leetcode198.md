### 思路 
 
dp,与一日兼职工作最大利润相似 
 
### 代码 
 
 
``` js
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const len = nums.length
    if (len == 0) return 0
    let dp = new Array(len + 1)
    dp[0] = [0]
    dp[1] = nums[0]
    for (let i = 2; i <= len; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1])
    }
    return dp[len]
};
``` 

**复杂度分析** 
- 时间复杂度：O(N) 
- 空间复杂度：O(N)


