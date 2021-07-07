// 53. 最大子序和--贪心算法

// 局部最优 =》 全局最优

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let res = Number.MIN_SAFE_INTEGER
    let count = 0
    for(let i=0;i<nums.length;i++) {
        count += nums[i]

        if(count > res) res = count

        if(count <= 0) count = 0
    }

    return res
};