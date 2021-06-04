### 思路

#### 盛最多水的容器

1、双指针,算出最大的面积
2、核心：比较左右指针，谁小谁移动，才能求得最大面积

### 代码
```js
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
```

**复杂度分析** - 时间复杂度：O(N) 。 - 空间复杂度：O（1）