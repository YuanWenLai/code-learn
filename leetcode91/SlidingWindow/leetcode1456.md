### 思路 
 
 窗口大小固定的滑动窗口
 1、首先确定第一个长度k的窗口中包含元音字母的个数windowCount，此时记录最大值max = windowCount
 2、然后滑动窗口，对应新增的右元素，若是元音字母，windowCount++
 3、对应减少的左元素，若是元音字母，windowCount--
 4、每次比较保留最大值，max = Math.max(max, windowCount)
 
 
### 代码 
 
 
``` js
 
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
}
 
``` 
 
**复杂度分析** - 时间复杂度：O(N)，其中 N 为数组⻓度。 - 空间复杂度：O(1)