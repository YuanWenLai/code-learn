// 349. 两个数组的交集

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    let hashMap = new Map()
    let res = []
    for(let i of nums1) {
        if(!hashMap.has(i)) {
            hashMap.set(i,i)
        }
    }
    for(let i of nums2) {
        if(hashMap.has(i) && !res.includes(i)) {
            res.push(i)
        }
    }
    return res
};