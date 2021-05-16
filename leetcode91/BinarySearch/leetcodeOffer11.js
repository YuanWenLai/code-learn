/*
 * @Author: yuanwenlai
 * @Date: 2021-03-03 13:48:19
 * @LastEditors: g05047
 * @LastEditTime: 2021-03-03 14:11:32
 * @Description: file content
 */


// 剑指 Offer 11. 旋转数组的最小数字
 var minArray = function(nums) {
    let r = nums.length - 1
    let l = 0
    let m
    while (l < r) {
        console.log("🚀 ~ file: leetcodeOffer11.js ~ line 16 ~ minArray ~ l", l)
        m = Math.floor(l + (r - l) / 2);
        console.log("🚀 ~ file: leetcodeOffer11.js ~ line 17 ~ minArray ~ m", m)
        if(nums[m] < nums[r]) {
            r = m
        }else if(nums[m] > nums[r]) {
            l = m + 1
        }else {
            r -= 1
        }
    }
    return nums[l]
};


console.log(minArray([3,4,5,1,2]))