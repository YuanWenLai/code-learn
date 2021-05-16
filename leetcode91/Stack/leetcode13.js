// 13. 罗马数字转整数
/**
 * @param {string} s
 * @return {number}
 */
var romanintToNum = function(s) {
    const valueSymbols = new Map()
    valueSymbols.set("M",1000)
    valueSymbols.set("CM",900)
    valueSymbols.set("D",500)
    valueSymbols.set("CD",400)
    valueSymbols.set("C",100)
    valueSymbols.set("XC",90)
    valueSymbols.set("L",50)
    valueSymbols.set("XL",40)
    valueSymbols.set("X",10)
    valueSymbols.set("IX",9)
    valueSymbols.set("V",5)
    valueSymbols.set("IV",4)
    valueSymbols.set("I",1)

    let resultNum = 0
    // 用一个字段来判断罗马组合字符是否在最后一个
    let isTail = false
    // 因为罗马字符有可能有两位，控制循环边界值-1
    for(let i = 0;i<s.length-1;i++) {
        if(valueSymbols.get(s[i]+s[i+1])) {
            resultNum += valueSymbols.get(s[i]+s[i+1])
            i++
            isTail = i == s.length-1
        }else {
            resultNum += valueSymbols.get(s[i])
        }
    }
    // 若尾字符已经被添加过来，最后一个补充字符无需再添加
    if(!isTail) {
        resultNum += valueSymbols.get(s[s.length-1])
    }
    
    return resultNum
};


console.log(" romanintToNum()", romanintToNum('III'))