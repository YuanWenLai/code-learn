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


// 状态压缩，二维数组变一维数组
function backpack(weight,value,bagWeight) {
    let n = weight.length
    let m = bagWeight

    // 初始化物品0
    let dp = new Array(m+1).fill(0)

    // 遍历算出背包最大价值
    for(let i=0;i<n;i++) {
        for(let j=m;j>=weight[i];j--) {
            dp[j] = Math.max(dp[j],dp[j-weight[i]] + value[i])
        }
    }
    console.log(dp[m])
    return dp[m]
}

backpack([1,3,4],[15,20,30],4)