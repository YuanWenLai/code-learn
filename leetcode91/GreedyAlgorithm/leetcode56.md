### 思路


1、贪心算法,局部最优推出全局最优
- 通过贪心，不断比较合并局部区域，局部最优达到全局最优

### 代码1

```js
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // 对数组进行排序
    intervals.sort((a,b) => a[0]-b[0])
    // 声明合并后的结果数组
    let retArr = []

    // 先进入第一个合并区
    retArr.push(intervals[0])

    // 遍历数组，判断是否满足合并
    for(let i=1;i<intervals.length;i++) {
        let len = ret.length
        if(retArr[len-1][1] >= intervals[i][0]) {
            // 更新该区域的最右值
            retArr[len-1][1] = Math.max(intervals[i][1],retArr[len-1][1]) 
        }else {
            // 否则新增区域
            retArr.push(intervals[i])
        }
    }

    return retArr
};
```

**复杂度分析** - 时间复杂度：O(NLogN) 。 - 空间复杂度：O（N）

