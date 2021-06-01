// 350. 两个数组的交集 II


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
    let hashMap = new Map()
    let res = []
    for(let i of nums1) {
        let val = hashMap.get(i)
        if(!val) {
            hashMap.set(i,1)
        }else {
            hashMap.set(i,val+1)
        }
    }
    for(let i of nums2) {
        let val = hashMap.get(i)
        if(val) {
            res.push(i)
            hashMap.set(i,val-1)
        }
    }
    return res
};