### 思路

贪心

### 代码

```js
var findContentChildren = function(g, s) {
    g.sort((a,b) => a - b)
    s.sort((a,b) => a - b)

    let count = 0
    let index = s.length - 1

    for(let i=g.length-1;i>=0;i--) {
        if(index >=0 && s[index] >= g[i]) {
            count++
            index--
        }
    }

    return count
};
```

**复杂度分析** - 时间复杂度：O(NLogN) 。 - 空间复杂度：O（LogN）
