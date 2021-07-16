// 976. 三角形的最大周长

/**
 * @param {number[]} nums
 * @return {number}
 */
 var largestPerimeter = function(nums) {
    nums.sort((a,b) => a-b)
    let max = 0
    for(let i=2;i<nums.length;i++) {
        if(nums[i] < (nums[i-1] + nums[i-2])) {
            max = nums[i] + nums[i-1] + nums[i-2]
        }
    }

    return max
};