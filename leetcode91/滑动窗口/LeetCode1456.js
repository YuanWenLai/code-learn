
// 1456. 定长子串中元音的最大数目
// 输入：s = "abciiidef", k = 3
// 输出：3
// 解释：子字符串 "iii" 包含 3 个元音字母。
var maxVowels = function(s, k) {
    const arr = ['a','e','i','o','u']
    let max = 0
    for(let i=0;i<k;i++){
        if(arr.includes(s[i])) max++
    }
    
    let maxNum = max
    for(let i=k;i<s.length;i++) {
        if(arr.includes(s[i])) maxNum ++
        if(arr.includes(s[i-k])) maxNum --
        max = Math.max(max,maxNum)
    }
    return max
};

 console.log(maxVowels('abciiidef',3))