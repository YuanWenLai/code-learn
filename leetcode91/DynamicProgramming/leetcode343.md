### 思路 
 
1、dp
⼀个是j * (i - j) 直接相乘。
⼀个是j * dp[i - j]，相当于是拆分(i - j)

2、贪心算法
 
### 代码 
 
 
``` js
/**
 * @param {number} n
 * @return {number}
 */
 var integerBreak = function(n) {
    let dp = new Array(n+1).fill(1)
    dp[2] = 1
    for(let i=3;i<=n;i++) {
        for(let j=1;j<i-1;j++) {
            dp[i] = Math.max(dp[i],Math.max(j*(i-j),j*dp[i-j]))
        }
    }

    return dp[n]
};
  ``` 

  
**复杂度分析** 
- 时间复杂度：O(n^2) 
- 空间复杂度：O(n)


``` js
// 贪心算法
var integerBreak2 = function(n) {
    if(n === 2) return 1
    if(n === 3) return 2
    if(n === 4) return 4

    let ret = 1

    while (n > 4) {
        ret *= 3
        n -= 3
    }

    ret *= n

    return ret
};
  ``` 

  
**复杂度分析** 
- 时间复杂度：O(n) 
- 空间复杂度：O(1)


