// 26. 删除有序数组中的重复项

// 双指针
/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    if(!nums) return 0

    let l = 0
    let r = 1
    while(l<nums.length) {
        if(nums[l] === nums[r]) {
            nums.splice(r,1)
        }else {
            l = r
            r++
        }
    }
    return nums.length
};