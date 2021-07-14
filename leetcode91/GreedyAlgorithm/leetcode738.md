### 思路

贪心
局部最优：遇到strNum[i - 1] > strNum[i]的情况，让strNum[i - 1]--，然后strNum[i]给为9，可以保证这两位变成最⼤单调递增整数。
全局最优：得到⼩于等于N的最⼤单调递增的整数。
### 代码

```js
/**
 * @param {number} n
 * @return {number}
 */
 var monotoneIncreasingDigits = function(n) {
    let res = 0
    let str = n.toString().split('')
    let flag = str.length
    for(let i=str.length-1;i>0;i--) {
        if(str[i] < str[i-1]) {
            flag= i
            str[i-1]--
        }
    }
    for(let i=flag;i<str.length;i++) {
        str[i] = 9
    }
    return str.join('')*1
};
```

**复杂度分析** - 时间复杂度：O(N) 。 - 空间复杂度：O（N）
