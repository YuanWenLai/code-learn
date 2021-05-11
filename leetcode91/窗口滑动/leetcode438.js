// 438. 找到字符串中所有字母异位词
/* 
给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。

字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。

*/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s, p) {
    if(s.length < p.length) return []
    let pObj={}
    let resArr = []
    let l = 0, r = p.length - 1
    for(let i=0;i<p.length;i++) {
        if(pObj[p[i]]) {
            pObj[p[i]]++
        }else {
            pObj[p[i]] = 1
        }
    }
    
    if(isXORbit(s.substring(l,r+1),pObj)) resArr.push(l)
    while(r < s.length -1) {
        r++
        l++
        if(isXORbit(s.substring(l,r+1),pObj)) resArr.push(l) 
    }
    return resArr
};


// 异或位的判断
function isXORbit(str,pObj) {
    if(!str) return false
    let tempObj = JSON.parse(JSON.stringify(pObj))
    for(let i=0;i<str.length;i++) {
        if(!tempObj[str[i]]) {
            return false
        }else {
            tempObj[str[i]] --
        }
    }
    return true
}

console.log(findAnagrams('abab','ab'))