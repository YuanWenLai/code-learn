/*
 * @Author: yuanwenlai
 * @Date: 2021-03-03 13:48:19
 * @LastEditors: g05047
 * @LastEditTime: 2021-03-04 13:47:05
 * @Description: file content
 */


// 34. 在排序数组中查找元素的第一个和最后一个位置
// 思路，使用寻找最左值和最右值
var searchRange = function(nums, target) {
    let l = 0
    let r = nums.length -1 
    let m = 0
    let retArr = [-1,-1]
    while(l <= r) {
        m = Math.floor((l+r)/2)
        if(nums[m] == target){
            // 收缩右边值
            r = m - 1
        }
        if(nums[m] < target) {
            l = m + 1
        }
        if(nums[m] > target) {
            r = m - 1
        }
    }
    if(l >= nums.length ||  nums[l] != target) return retArr
    retArr[0] = l
    l = 0
    r = nums.length -1 
    m = 0
    while(l <= r) {
        m = Math.floor((l+r)/2)
        if(nums[m] == target){
            // 收缩右边值
            l = m +1
        }
        if(nums[m] < target) {
            l = m + 1
        }
        if(nums[m] > target) {
            r = m - 1
        }
    }
    if(r < 0 ||  nums[r] != target) return retArr
    console.log(" 46 ~ searchRange ~ r", r)
    retArr[1] = r
    return retArr
};

console.log(searchRange([5,7,7,8,8,10],7))