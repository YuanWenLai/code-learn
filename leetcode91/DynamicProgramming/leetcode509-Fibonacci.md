### 思路 
 
斐波那契数列的定义是 f(n + 1) = f(n) + f(n - 1)f(n+1)=f(n)+f(n−1) ，生成第 nn 项的做法有以下几种:
1.递归法：
    原理：将f(n)的问题计算拆分为f(n-1)+f(n-2)来递归计算
    缺点：递归的时间复杂度O(2^N) 太大，且重复计算很多子递归
2.记忆化递归法：
    原理：将计算过的f(n)值储存在数组中，遇到时，直接冲数组获取，避免重复计算
    优点：Time Complexity = o(N)
    缺点：用空间获取时间，记忆优化存储需要o(N)的Space Complexity
2.动态规划法：
    原理：动态规划的状态转移方程即为上述递推关系，边界条件为 F(0) 和 F(1)，滚动数组最后一位
    优点：Time Complexity = o(N)   Time Complexity = o(1)
 
 
### 代码 
 
 
``` js
var fib = function(n) {
    if(n == 0) return 0
    if(n == 1 || n == 2) return 1
    return fib(n-1) + fib(n-2)
};

 
``` 

**复杂度分析** 
- 时间复杂度：O(2^N) 
- 空间复杂度：O(N)


