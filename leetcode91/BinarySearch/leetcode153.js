// 153. 寻找旋转排序数组中的最小值

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    let len = nums.length
    let l = 0
    let r = len -1
    let mid
    while (l<r) {
        mid = Math.floor((l+r)/2)
        if(nums[mid] > nums[r]) {
            l = mid +1
        }else {
            r = mid
        }
    }

    return nums[l]
};