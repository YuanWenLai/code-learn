// 1456. 定长子串中元音的最大数目
/* 
给你字符串 s 和整数 k 。

请返回字符串 s 中长度为 k 的单个子字符串中可能包含的最大元音字母数。

英文中的 元音字母 为（a, e, i, o, u）。

*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var maxVowels = function(s, k) {
    const vowelArr = ['a','e','i','o','u']
    let l = 0, r = k - 1
    console.log("🚀 axVowels ~ r", r)
    let windowCount = 0
    let max = 0
    const sLen = s.length
    if(k==0) return 0
    if(k==1) {
        for(i=0;i<sLen;i++) {
            if(vowelArr.includes(s[i])) return 1
        }
    }
    for(i=0;i<k;i++) {
        if(vowelArr.includes(s[i])) windowCount++
    }
    max = windowCount
    while(r < sLen - 1) {
        r++
        l++
        if(vowelArr.includes(s[l-1])) windowCount--
        if(vowelArr.includes(s[r])) windowCount++
        max = Math.max(max, windowCount)
    }
    return max
};

console.log(maxVowels("tnfazcwrryitgacaabwm",4)) 
