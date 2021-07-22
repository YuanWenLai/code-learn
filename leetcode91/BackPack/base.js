// 01背包问题
/* 
第i个物品的质量为weight[i],价值为value[i]

问：背包容量为bagWeight，最多能装物品的价值是多少？

例子1：

weight：[1,3,4]
value: [15,20,30]
bagWeight: 4
output: 35
*/
/**
 * @param {number[]} weight
 * @param {number[]} value
 * @param {number} bagWeight
 * @return {number}
 */

function backpack(weight,value,bagWeight) {
    let n = weight.length
    let m = bagWeight

    let dp = new Array(n+1).fill(0).map(item => new Array(m+1).fill(0))

    // 初始化物品0
    for(let j=m;j>=weight[0];j--) {
        dp[0][j] = dp[0][j-weight[0]] + value[0]
    }

    // 遍历算出背包最大价值
    for(let i=1;i<n;i++) {
        for(let j=0;j<=m;j++) {
            // 若背包重量j小于物品重量，取上一个位置的最大值
            // 否则，需要比对上一个位置和该位置物品的最大值
            if(j < weight[i]) dp[i][j] = dp[i-1][j]
            else dp[i][j] = Math.max(dp[i][j] = dp[i-1][j], dp[i-1][j-weight[i]]+value[i])
        }
    }
    console.log(dp[n-1][m])
    return dp[n-1][m]
}

backpack([1,3,4],[15,20,30],4)