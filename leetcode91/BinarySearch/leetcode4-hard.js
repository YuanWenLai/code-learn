// 4. 寻找两个正序数组的中位数

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [...nums1,...nums2]
    if(arr.length < 2) return arr[0] || 0
    arr.sort((a,b) => a-b)
    
    const len = arr.length
    let mid = Math.floor(len/2)
    // odd
    if(len%2 === 1) {
        return arr[mid]
    }else{
        // even
        return (arr[mid]+arr[mid-1])/2
    }
};