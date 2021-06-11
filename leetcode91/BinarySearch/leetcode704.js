// 704. 二分查找

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let l = 0
    let r = nums.length - 1

    while(l < r) {
        let mid = l + ((r - l)>>1)
        if(nums[mid] === target) {
            return mid
        }else if(nums[mid] > target) {
            l = mid + 1
        }else {
            r = mid - 1
        }
    }
    return -1
};