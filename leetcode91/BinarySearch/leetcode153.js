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
    // 这里控制条件没取等号，取等号大多是为了在while中直return mid，不取等号就跳出while返回l的值。
    while (l<r) {
        mid = Math.floor((l+r)/2)
        if(nums[mid] > nums[r]) {
            // # 中间数字大于右边数字，比如[3,4,5,1,2]，则左侧是有序上升的，最小值在右侧
            l = mid +1
        }else {
            //  # 中间数字小于等于右边数字，比如[6,7,1,2,3,4,5]，则右侧是有序上升的，最小值在左侧
            r = mid
        }
    }

    return nums[l]
};