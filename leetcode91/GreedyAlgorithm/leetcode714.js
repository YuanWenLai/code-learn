// 714. 买卖股票的最佳时机含手续费

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
 var maxProfit = function(prices, fee) {
    let res = 0
    let minPrice = prices[0]

    for(let i=1;i<prices.length;i++) {
        if(prices[i] < minPrice) {
            minPrice = prices[i]   // 相当于买入
        }

        if(prices[i] > (minPrice+fee)) {
            res += prices[i] -minPrice -fee

            /* 
                因为如果还在收获利润的区间⾥，表示并不是真正的卖出，⽽计算利润每次都
                要减去⼿续费，所以要让minPrice = prices[i] - fee;，这样在明天收获利润的时候，才不会多减⼀次⼿续费！
            */
            minPrice = prices[i] - fee
        }
    }

    return res
};