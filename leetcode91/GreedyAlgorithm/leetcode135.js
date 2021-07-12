// 135. 分发糖果

/**
 * @param {number[]} ratings
 * @return {number}
 */
 var candy = function(ratings) {
    let len = ratings.length
    let candyArr = new Array(len).fill(1)

    // 从前向后比较
    for(let i=1;i<len;i++) {
        if(ratings[i] > ratings[i-1]) {
            candyArr[i] =candyArr[i-1]+1
        }
    }

    // 从后向前比较
    for(let i=len-2;i>=0;i--) {
        if(ratings[i] > ratings[i+1]) {
            candyArr[i] = Math.max(candyArr[i],candyArr[i+1]+1)
        }
    }
    return candyArr.reduce((a,b) => a+b)
};