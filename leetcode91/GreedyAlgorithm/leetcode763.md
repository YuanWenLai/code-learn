### 思路

1、贪心
- 统计每⼀个字符最后出现的位置
- 从头遍历字符，并更新字符的最远出现下标，如果找到字符最远出现位置下标和当前下标相等了，则找到了分割点

### 代码

```js
var partitionLabels = function(s) {
    // 先用hash表来记录每个字母的最远区域
    let hash = {}
    for(let i=0;i<s.length;i++) {
        hash[s[i]] = i
    }

    // 声明结果表
    let ret = []
    let right = 0
    let left = 0

    // 寻找划分区域
    for(let i=0;i<s.length;i++) {
        right = Math.max(right,hash[s[i]])
        // 若当前位置与最远标识相同，则可以作为划分区域
        if(i === right) {
            ret.push(right-left+1)
            // 更换下一个起始点的标识
            left = i+1
        }
    }

    return ret
};
```

**复杂度分析** - 时间复杂度：O(N)) 。 - 空间复杂度：O（N）
