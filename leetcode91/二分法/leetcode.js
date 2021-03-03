/*
 * @Author: yuanwenlai
 * @Date: 2021-03-03 19:40:11
 * @LastEditors: g05047
 * @LastEditTime: 2021-03-03 19:54:00
 * @Description: file content
 */

var search = function(nums, target) {
    let l = 0
    let r = nums.length-1
    console.log("🚀 ~~ search ~ r", r)
    let m = 0
    while(l <=  r) {
        m = Math.floor((l+r) /2) 
        if(nums[m] == target) {
            return m
        }
        if(nums[m] > target) {
            r = m - 1
        }
        if(nums[m] < target) {
            l = m + 1
        }
    }
    return -1
};

console.log(search([5],5))