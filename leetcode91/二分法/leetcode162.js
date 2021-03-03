
// 162. 寻找峰值


// 输入：nums = [1,2,3,1]
// 输出：2
// 解释：3 是峰值元素，你的函数应该返回其索引 2。

var findPeakElement = function(nums) {
    let l = 0
    let r = nums.length - 1 
    let m = 0
    while(l < r) {
        m = Math.floor((r+l)/2)
        if(nums[m] > nums[m+1]){
            r = m
        }else {
            l = m + 1
        }
    }
    return l
};


console.log(findPeakElement([1,2,1,3,5,6,4,1]))