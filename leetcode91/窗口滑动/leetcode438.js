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
    let resultArr = []
    let pObj = {}
    for(let i=0;i<p.length;i++) {
        if(!pObj[[p[i]]]) {
            pObj[[p[i]]] = 1
        }else {
            pObj[[p[i]]] += 1
        }
    }
    console.log("🚀23 pObj", pObj)

};

console.log(findAnagrams('adad','absaa'))