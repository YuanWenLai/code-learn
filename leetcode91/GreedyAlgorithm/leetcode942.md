### 思路

贪心，局部最优=》全局最优


给定只含 "I"（增大）或 "D"（减小）的字符串 S ，令 N = S.length。

返回 [0, 1, ..., N] 的任意排列 A 使得对于所有 i = 0, ..., N-1，都有：

如果 S[i] == "I"，那么 A[i] < A[i+1]
如果 S[i] == "D"，那么 A[i] > A[i+1]

用max和min两个变量来储存最大最小值

当字符为"I"，先获取最小值，再让最小值自增min++,下次再增大时，保证A[i] < A[i+1]
当字符为"D"，先获取最大值，再让最大值自减min--,下次再减小时，保证A[i] > A[i+1]

最后一个字符遍历后，此时min和max相等了，直接放假结果数组

### 代码

```js
/**
 * @param {string} s
 * @return {number[]}
 */
 var diStringMatch = function(s) {
    let max = s.length
    let min = 0
    let ret = []
    for(let i=0;i<s.length;i++) {
        if(s[i] == 'I') {
            ret.push(min)
            min++
        }else {
            ret.push(max)
            max--
        }
    }
    s[s.length-1] == 'I' ? ret.push(max) : ret.push(min)

    return ret
};;
```

**复杂度分析** - 时间复杂度：O(N) 。 - 空间复杂度：O（N）
