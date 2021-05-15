/*
 * @Author: yuanwenlai
 * @Date: 2021-03-03 13:48:19
 * @LastEditors: g05047
 * @LastEditTime: 2021-03-03 14:11:32
 * @Description: file content
 */


 // 33. 搜索旋转排序数组
 var search = function(nums, target) {
    let r = nums.length - 1
    let l = 0
    let m
    while (l <= r) {
        m = Math.floor(l + (r - l) / 2);
        if(nums[m] === target) return nums.indexOf(target)
        // nums[mid] == nums[start] 了，比如 30333 。这个时候可以选择舍弃 start，也就是 start 右移一位
        while( l < m && nums[l] == nums[m]){
            l += 1
        }
        if(nums[l] <= nums[m]) {
            if(nums[l] <= target && target <= nums[m]) {
                r = m -1
            }else {
                l = m + 1
            }
        }else {
            if(nums[m] < target && target <= nums[r]){
                l = m + 1
            }else {
                r = m -1
            }
        }
    }
    return -1
};