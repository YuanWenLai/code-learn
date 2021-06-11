/*
 * @Author: yuanwenlai
 * @Date: 2021-03-03 13:48:19
 * @LastEditors: g05047
 * @LastEditTime: 2021-03-03 14:11:32
 * @Description: file content
 */


 // 33. 搜索旋转排序数组
 var search = function(nums, target) {
    let r = nums.length -1
    let l = 0
    let mid = 0
    while(l <= r) {
        mid = Math.floor((l+r)/2)
        if(nums[mid] === target) return nums.indexOf(target)

        // 排查重复项
        while(l < mid && nums[l] === nums[mid]) {
            l ++
        }

        // 搜小搜索范围
        if(nums[l] <= nums[mid]) {
            // target是否在左调度区
            if(nums[l] <= target && target <= nums[mid]) {
                r = mid - 1
            }else {
                l = mid + 1
            }
        }else {
            // // target是否在右调度区
            if(nums[mid] < target && target <= nums[r]) {
                l = mid + 1
            }else {
                r = mid - 1
            }
        }
    }
    return -1
};