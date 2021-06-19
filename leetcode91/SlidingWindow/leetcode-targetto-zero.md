### 思路 
 
 动态滑动窗口+双指针
 思路：
 1、减去的和为target，反过来求，剩下的和lessSum = Sum - target
 2、类似于76题，动态窗口寻找目标，寻找最小窗口
 
 
### 代码 
 
 
``` js
 
 class Solution {
    solve(nums, target) {
        if(target === 0) return 0

        // 统计数组总和
        let sum = 0
        for(let i=0;i<nums.length ;i++) {
            sum += nums[i]
        }

        // 总和减去删除的和target，等于剩下的
        let lessSum = sum - target
        let ret = Number.MAX_VALUE

        // 若剩下的值为0时，说明总和刚好为target
        if(lessSum == 0) {
            return nums.length 
        }else if(lessSum <0) {
            return -1
        }

        // 初始化游动指针，右指针先走
        for(let l = 0,r = 0,tempSum = 0;r<nums.length ;r++) {
            tempSum += nums[r]
            while (tempSum >= lessSum && l<nums.length ) {
                // 比对右指针累计的值，是否等于剩下的目标值
                if(lessSum === tempSum) {
                    ret = Math.min(nums.length-1-r+l,ret)
                }
                // 缩小左窗口
                tempSum -= nums[l]
                l++
            }
        }

        return ret == Number.MAX_VALUE ? -1 : ret
    }
}
``` 
 
**复杂度分析** - 时间复杂度：O(N)。 - 空间复杂度：O(1)