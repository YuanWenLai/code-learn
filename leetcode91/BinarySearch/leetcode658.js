/*
 * @Author: yuanwenlai
 * @Date: 2021-03-04 20:34:48
 * @LastEditors: g05047
 * @LastEditTime: 2021-03-04 20:46:59
 * @Description: file content
 */



// 658. 找到 K 个最接近的元素
var findClosestElements = function(arr, k, x) {
    let l = 0
    let r = arr.length - k
    let m = 0
    while(l < r) {
        m = Math.floor((r+l)/2)
        if(Math.abs(x-arr[m]) > Math.abs(arr[m+k] - x)){
            l = m + 1
        }else {
            r = m
        }
    }
    return arr.slice(l,l+k)
};

// [0,2,2,3,4,6,7,8,9,9]
// 4
// 5
console.log(findClosestElements([0,2,2,3,4,6,7,8,9,9],4,5))