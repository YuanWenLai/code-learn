// 738. 单调递增的数字

/**
 * @param {number} n
 * @return {number}
 */
 var monotoneIncreasingDigits = function(n) {
    let res = 0
    let str = n.toString().split('')
    let flag = str.length
    for(let i=str.length-1;i>0;i--) {
        if(str[i] < str[i-1]) {
            flag= i
            str[i-1]--
        }
    }
    for(let i=flag;i<str.length;i++) {
        str[i] = 9
    }
    return str.join('')*1
};