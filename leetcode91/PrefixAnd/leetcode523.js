// 523. 连续的子数组和

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var checkSubarraySum = function(nums, k) {
    const m = nums.length
    if(m < 2) return false

    const map = new Map()
    // 设置前置值
    map.set(0,-1)

    let remainder = 0
    for(let i=0;i<m;i++) {

        // 标注1
        remainder = (remainder+nums[i]) % k
        if(map.has(remainder)) {
            const preIndex = map.get(remainder)
            if(i - preIndex >= 2) return true
        }else {
            map.set(remainder, i)
        }
    }

    return false
};


// 标注1：
/* 
 -- remainder = prefixsum[i] % k 得到 （1）prefixsum[i] = remainder * n * K
 -- 因此，每次计算前缀和是 （2） remainder = (prefixsum[i-1] + nums[i]) % k
 -- 根据公式（1）和（2）remainder = (remainder * n * K + nums[i]) % k  = remainder + nums[i] % k
 -- 化简得到式子： remainder = (remainder + nums[i]) % k
*/