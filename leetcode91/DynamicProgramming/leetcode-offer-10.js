// 剑指 Offer 10- II. 青蛙跳台阶问题
// Leetcode 70. 爬楼梯

// see: https://leetcode-cn.com/leetbook/read/illustration-of-algorithm/57xs06/

/**
 * @param {number} n
 * @return {number}
 */

// 等同于斐波那契数列
// 也可用动态规划描述，f(n) --选1--> f(n-1); f(n) --选2--> f(n-2)，得总方案数：f(n) = f(n-1)+f(n-2) 
// 出口条件：f(0)=1;f(1)=1;f(2)=2


// 递归方法容易超时
 var numWays = function(n) {
    if(n < 2) return 1
    if(n == 2) return 2
    return numWays(n-1)+numWays(n-2)
};

// 记忆优化法
var numWaysBetter = function(n) {
    if(n < 2) return 1
    if(n == 2) return 2
    let fibArr = [1,2]
    for(let i=2;i<n;i++) {
        fibArr.push((fibArr[i-1]+fibArr[i-2])%1000000007)
    }
    return fibArr[fibArr.length-1]
};

// 动态规划
var numWaysBP = function(n) {
    if(n < 2) return 1
    if(n == 2) return 2
    let p = 0,q=1,r=1
    for(let i=2;i<=n;i++) {
        p=q
        q=r
        r=(p+q)%1000000007
    }
    return r
};

console.time()
console.log(numWaysBP(78))
console.timeEnd()