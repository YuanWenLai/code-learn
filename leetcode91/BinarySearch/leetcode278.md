### 题目描述

278. 第一个错误的版本

### 思路

1. 二分法

### 代码

```js
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1;
        let right = n;
        while (left < right) {
        let mid = left + ~~((right - left) / 2);
        if (isBadVersion(mid)) {
            right = mid;
        } 
        else {
            left = mid + 1;
        }
    }
    return left;
    };
};
```

**复杂度分析** - 时间复杂度：O(logn)。 - 空间复杂度：O(1)
