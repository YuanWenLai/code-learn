// 474. 一和零


// dp


/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var findMaxForm = function(strs, m, n) {
    const dp = new Array(m+1).fill(0).map(() => new Array(n+1).fill(0))

    const len = strs.length
    for(let i=0;i<len;i++) {
        const zerosOnes = getZerosOnes(strs[i])
        const zeros = zerosOnes[0]
        const ones = zerosOnes[1]
        for(let j=m;j >= zeros;j--) {
            for(let k=n;k >= ones;k--) {
                dp[j][k] = Math.max(dp[j][k],dp[j-zeros][k-ones]+1)
            }
        }
    }
    return dp[m][n]
};

const getZerosOnes = (str) => {
    const zerosOnes = new Array(2).fill(0)
    const  strLen = str.length

    for(let i =0;i<strLen;i++) {
        zerosOnes[str[i].charCodeAt() - ('0'.charCodeAt())]++
    }

    return zerosOnes
}


// see:https://leetcode-cn.com/problems/ones-and-zeroes/solution/yi-he-ling-by-leetcode-solution-u2z2/