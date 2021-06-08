// 1049. 最后一块石头的重量 II


// 背包问题,动态规划
/**
 * @param {number[]} stones
 * @return {number}
 */
 var lastStoneWeightII = function(stones) {
    if(stones === null && stones.length === 0) return 0

    let sum = 0

    // 累计和
    stones.forEach(e => sum += e)

    let mid = sum >> 1

    let dp = new Array(mid+1).fill(0)

    for(let i=0;i<stones.length;i++) {
        for(let j = mid;j>=stones[i];j--) {
            dp[j] = Math.max(dp[j],stones[i] + dp[j-stones[i]])
            console.log(j, dp[j])
        }
        console.log('******************')
    }

    return sum - 2*dp[mid]
};
lastStoneWeightII([31,26,33,21,40])

// see:https://leetcode-cn.com/problems/last-stone-weight-ii/solution/yi-pian-wen-zhang-chi-tou-bei-bao-wen-ti-5lfv/
