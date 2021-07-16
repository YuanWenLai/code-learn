// 942. 增减字符串匹配

/**
 * @param {string} s
 * @return {number[]}
 */
 var diStringMatch = function(s) {
    let max = s.length
    let min = 0
    let ret = []
    for(let i=0;i<s.length;i++) {
        if(s[i] == 'I') {
            ret.push(min)
            min++
        }else {
            ret.push(max)
            max--
        }
    }
    s[s.length-1] == 'I' ? ret.push(max) : ret.push(min)

    return ret
};