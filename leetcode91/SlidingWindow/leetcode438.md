### 思路 
 
 滑动窗口+哈希(还是暴力了)
 
 
### 代码 
 
 
``` js
 
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
``` 
 
**复杂度分析** - 时间复杂度：O(N^2)。 - 空间复杂度：O(N^2)