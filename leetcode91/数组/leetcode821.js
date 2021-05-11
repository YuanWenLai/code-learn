// 821. 字符的最短距离
/* 

给你一个字符串 s 和一个字符 c ，且 c 是 s 中出现过的字符。

返回一个整数数组 answer ，其中 answer.length == s.length 且 answer[i] 是 s 中从下标 i 到离它 最近 的字符 c 的 距离 。

两个下标 i 和 j 之间的 距离 为 abs(i - j) ，其中 abs 是绝对值函数。

*/
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    if(s.length === 1) return [0]
    let antiS = s.split('').reverse().join('')
    let antiArr = []
    let arr = []
    let index = s.indexOf(c)
    let antiIndex = antiS.indexOf(c)
    for(let i=0;i<s.length;i++) {
        // 正序数组遍历
        if(s[i] !=c){
            arr.push(Math.abs(i - index))
        }else {
            arr.push(0)
            index = i
        }

        // 反序数组遍历
        if(antiS[i] != c ){
            antiArr.unshift(Math.abs(i - antiIndex))
        }else {
            antiArr.unshift(0)
            antiIndex = i
        }
    }
    return arr.map((item,index) => Math.min(item,antiArr[index]))
};

shortestToChar("loveleetcode",'e')