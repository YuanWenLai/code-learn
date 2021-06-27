### 思路 
 
dp 
 
### 代码 
 
 
``` js
var findNumberOfLIS = function(nums) {
    const dp = new Array(nums.length).fill(1)
    const count = new Array(nums.length).fill(1)
    for(let i = 1; i < nums.length; i++){
        for(let j = i - 1; j >=0; j--){
            if(nums[i] > nums[j]){
                if(dp[i] < dp[j] + 1){
                    dp[i] = dp[j] + 1
                    count[i] = count[j]
                }else if(dp[i] == dp[j] + 1){
                    count[i] += count[j]
                }
            }
        }
    }

    let longest = Math.max(...dp)
    let ret = 0
    for(let i = 0; i < nums.length; i++){
        if(dp[i] === longest){
            ret += count[i]
        }
    }

    return ret
};
 
``` 

**复杂度分析** 
- 时间复杂度：O(N^2) 
- 空间复杂度：O(N)


