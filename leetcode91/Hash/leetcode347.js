// 347. 前 K 个高频元素

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    let map = new Map()
    let arr = [ ...new Set(nums)]
    nums.map(num => {
        if(map.has(num)) map.set(num, map.get(num)+1)
        else map.set(num, 1)
    })
    // 降序排序，截取k高频的值
    return arr.sort((a,b) => map.get(b) - map.get(a)).slice(0,k)
};