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

let test = new Solution()

let res = test.solve([3, 1, 1, 2, 5, 1, 1],7)
console.log("🚀 res", res)
console.log("🚀 res", res)
console.log("🚀 res", res)
