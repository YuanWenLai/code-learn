### 思路


1、贪心算法,局部最优推出全局最优
- 正序遍历一遍比较大小
- 倒序再遍历一遍大小
- 避免同时比较，容易错乱

### 代码1

```js

/**
 * @param {number[]} ratings
 * @return {number}
 */
 var candy = function(ratings) {
    let len = ratings.length
    let candyArr = new Array(len).fill(1)

    // 从前向后比较
    for(let i=1;i<len;i++) {
        if(ratings[i] > ratings[i-1]) {
            candyArr[i] =candyArr[i-1]+1
        }
    }

    // 从后向前比较
    for(let i=len-2;i>=0;i--) {
        if(ratings[i] > ratings[i+1]) {
            candyArr[i] = Math.max(candyArr[i],candyArr[i+1]+1)
        }
    }
    return candyArr.reduce((a,b) => a+b)
};
```

**复杂度分析** - 时间复杂度：O(N) 。 - 空间复杂度：O（N）
