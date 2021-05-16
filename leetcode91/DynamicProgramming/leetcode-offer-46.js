// 剑指 Offer 46. 把数字翻译成字符串

// https://leetcode-cn.com/leetbook/read/illustration-of-algorithm/99dnh6/

/**
 * @param {number} num
 * @return {number}
 */
 var translateNum = function(num) {
    let str = num+''
    let pos1 = 1,pos2 = 1
    for(let i=2;i<=str.length;i++) {
        let subNum = 10*str[i-2] + 1*str[i-1]
        let res = (subNum >= 10 && subNum <= 25) ? pos1 + pos2 : pos1
        pos2 = pos1
        pos1 = res
    }
    return pos1
};

console.time()
console.log(translateNum(12258))
console.timeEnd()