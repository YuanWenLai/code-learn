### 题目描述

69. x 的平方根

### 思路

1. 二分法

### 代码

```js
var sqrt = function(x) {
    let l = 0
    let r =x
    let m = 0
    if(x == 1) return 1
    if(x == 0) return 0
    while(l <= r) {
        m = Math.floor((l+r+1)/2)
        if(m*m == x) return m
        if(l == m) return l
        if(m*m > x) {
            r = m -1
        }else {
            l = m
        }
    }
    return l
}
```

**复杂度分析** - 时间复杂度：O(logn)。 - 空间复杂度：O(1)
