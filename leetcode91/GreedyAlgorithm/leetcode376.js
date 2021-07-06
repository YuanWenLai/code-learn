// 376. 摆动序列

/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
    if (nums.length <= 1) return nums.length
    let res = 1
    let preSub = 0
    let curSub = 0

    for (let i = 0; i < nums.length - 1; i++) {
        curSub = nums[i + 1] - nums[i]
        if ((curSub > 0 && preSub <= 0) || (preSub >= 0 && curSub < 0)) {
            res++
            preSub = curSub
        }
    }

    return res
};