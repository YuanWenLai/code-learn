// 96. 不同的二叉搜索树

/**
 * @param {number} n
 * @return {number}
 */
 var numTrees = function(n) {
    let dp = new Array(n+1).fill(0)
    dp[0] = 1
    for(let i=1;i<=n;i++) {
        // 在遍历第几课树里面计算拆分的树组合
        for(j=1;j<=i;j++) {
            dp[i] += dp[j-1] * dp[i-j]
        }
    }
    return dp[n]
};


// see:「代码随想录」动态规划专题精讲（v1.1）.pdf