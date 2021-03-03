###  leetcode 69实现 int sqrt(int x) 函数。

计算并返回 x 的平方根，其中 x 是非负整数。

由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

示例 1:

输入: 4
输出: 2
示例 2:

输入: 8
输出: 2
说明: 8 的平方根是 2.82842...,
由于返回类型是整数，小数部分将被舍去



### 思路 

1. 该题目使用二分法，使得中间值m无限向x逼近
2. 需要注意0和1的边界值
3. 二分法向左取值

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

**复杂度分析** - 时间复杂度：O(logx)，其中 N 为数组⻓度。 - 空间复杂度：O(1)