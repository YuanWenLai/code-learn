/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// [2,-3,-1,5,-4]
// 2
 var largestSumAfterKNegations = function(nums, k) {
    nums.sort((a,b) => {
        return Math.abs(b) - Math.abs(a)
    })

    // 遍历一次，k次步数内，将负数反转
    for(let i=0;i<nums.length;i++) {
        if(nums[i] <0 && k>0) {
            nums[i] *= -1
            k--
        }
    }

    // 若遍历一次后，k值还大于0，对最小一位进行多次反转
    // k为偶数时，不用反转，因为反转后是不变的
    if(k % 2 === 1) {
        nums[nums.length-1] *= -1
    }

    // k次反转后，累加，得到最终值
    return nums.reduce((a,b) => a+b)
};