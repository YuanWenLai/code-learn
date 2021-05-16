// 989. 数组形式的整数加法
/* 
对于非负整数 X 而言，X 的数组形式是每位数字按从左到右的顺序形成的数组。例如，如果 X = 1231，那么其数组形式为 [1,2,3,1]。

给定非负整数 X 的数组形式 A，返回整数 X+K 的数组形式。

*/

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
 var addToArrayForm = function(num, k) {
    let len = num.length - 1
    // 用一个进位数来保存上一位的溢出情况
    let carryNum = 0
    let number = []
    while(len >= 0 || k!=0) {
        let sum = carryNum
        if(len >= 0) {
            sum += num[len]
            len--
        }
        if(k!=0) {
            sum += k%10
            // 剔除k的个位
            k = Math.floor(k/10)
        }
        // 保存新的进位数
        carryNum = Math.floor(sum/10)
        number.unshift(sum % 10)
    }
    if(carryNum > 0) {
        number.unshift(carryNum)
    }
    return number
};


console.log(addToArrayForm([9,9,9,9,9,9,9,9,9,9],1))
