// 80. 删除有序数组中的重复项 II

// 双指针

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    if(nums.length < 3) return nums.length

    let l = 0
    let r = 1

    while(l < nums.length) {
        if(nums[l] === nums[r] && (r - l)+1 < 3) {
            r++
        }else if(nums[l] === nums[r] && (r - l)+1 >= 3) {
            nums.splice(r,1)
        }else {
            l = r
            r++
        }
    }
    return nums.length
};