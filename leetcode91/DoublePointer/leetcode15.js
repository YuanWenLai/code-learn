// 15. 三数之和

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    let res = []
    const len = nums.length
    if(nums == null || len < 3) return res

    // 对数组先进行排序
    nums.sort((a,b) => a - b)

    for(let i=0;i<len;i++) {
        // 经过排序后，若当前的值大于0，则三者相加的数一定大于0
        if(nums[i] > 0) break
        // 若与前者的值相同，去重，防止重复输入
        if(i>0 && nums[i] == nums[i-1]) continue

        let L = i + 1
        let R = len - 1
        while(L < R) {
            const sum = nums[i] + nums[L] + nums[R]
            if(sum == 0) {
                res.push([nums[i],nums[L],nums[R]])
                while(L<R && nums[L] == nums[L+1]) L++  //去重
                while(L<R && nums[R] == nums[R-1]) R--  // 去重

                // 没有重复的情况下，正常走步伐
                L++
                R--
            }else if(sum < 0) {
                L ++
            }else if(sum > 0) {
                R --
            }
        }
    }
    return res
};

// see:https://leetcode-cn.com/problems/3sum/solution/hua-jie-suan-fa-15-san-shu-zhi-he-by-guanpengchn/