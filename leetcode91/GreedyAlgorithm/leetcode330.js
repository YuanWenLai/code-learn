/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
 var minPatches = function(nums, n) {
    let res = 0
    let x = 1
    let len = nums.length
    let index = 0

    while (x <= n) {
        if(index < len && nums[index] <= x) {
            x += nums[index]
            index++
        }else {
            x *= 2
            res++
        }
    }
    return res
};