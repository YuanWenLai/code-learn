// 525. 连续数组

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxLength = function(nums) {
    let counter = 0
    let maxLength = 0
    let hashMap = new Map()
    hashMap.set(counter,-1)
    for(let i=0;i<nums.length;i++) {
        if(nums[i]>0) {
            counter ++
        }else {
            counter --
        }

        if(hashMap.has(counter)) {
            let preIndex = hashMap.get(counter)
            maxLength = Math.max(maxLength,i-preIndex)
        }else {
            hashMap.set(counter,i)
        }
    }

    return maxLength
};