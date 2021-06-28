/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    let len = nums.length
    let dp = new Array(len).fill(1)
    let max = 0
    let ret = []
    for (let i = 0; i < len; i++) {
        let temp = []
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                temp.push(j)
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        ret.push(temp)
        max = Math.max(max, dp[i])
    }
    console.log(ret)
    return max
};


let res = lengthOfLIS([1, 3, 5, 4, 7])
console.log(res)