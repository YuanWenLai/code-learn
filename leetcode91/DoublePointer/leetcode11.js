// 11. 盛最多水的容器

/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    const len = height.length
    let maxRes = 0
    let l = 0
    let r = len - 1
    while (l < r) {
        maxRes = Math.max(maxRes, (r-l)*Math.min(height[l],height[r]))
        if(height[l] < height[r]) {
            l++
        }else {
            r--
        }
    }
    return maxRes
};