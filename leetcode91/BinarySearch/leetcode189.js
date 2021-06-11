// 189. 旋转数组

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {

    // 反转数组
    function reverse(l,r) {
        while (l < r) {
            let temp = nums[r]
            nums[r] = nums[l]
            nums[l] = temp
            l++
            r--
        }
    }

    let len  = nums.length
    // 防止k指过大，取余数
    k = k % len

    if(k == 0 || n<2) return nums


    // demo: [1,2,3,4,5,6,7] ,k=3
    // 先反转整个数组,[7,6,5,4,3,2,1]
    reverse(0,len-1)

    // 再反转前k个元素.[5,6,7,4,3,2,1]
    reverse(0,k-1)

    // 再反转后n-k个元素，[5，6，7，1，2，3，4]
    reverse(k,n-1)

    return nums
};