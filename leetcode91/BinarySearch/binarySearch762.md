### 题目描述

762.Number Stream to Intervals

### 思路

1. 暴力

### 代码

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
class Solution {
    solve(nums) {
        let res = 0
        for(let i=0;i<nums.length;i++) {
            for(let j=i+1;j<nums.length;j++) {
                if(nums[i] > nums[j]*3) res++
            }
        }
        return res
    }
}
```

**复杂度分析** - 时间复杂度：O(N^2)。 - 空间复杂度：O(N)
