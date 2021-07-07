// 122. 买卖股票的最佳时机 II

// 贪心算法，局部最优=》全局最优

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let res = 0
    for(let i=1;i<prices.length;i++) {
        res += Math.max(prices[i] - prices[i-1],0)
    }
    return res
};