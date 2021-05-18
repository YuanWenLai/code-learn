// 3. 无重复字符的最长子串

// 滑动窗口+哈希表

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    // hash 记录每个字符是否出现过
    const hashList = new Set()
    const len = s.length

    // 右指针，初始值为-1，相当于字符串的左侧，代表还没开始移动
    let r = -1,
        ans = 0
    
    for(let i=0;i<len;i++) {
        if(i != 0) {
            // 左指针向右移动了，移去该指针
            hashList.delete(s.charAt(i-1))
        }
        // 右指针在区域范围内，并且hashList中没有当前字符
        while(r + 1 < len && !hashList.has(s.charAt(r+1))) {
            hashList.add(s.charAt(r+1))
            ++r
        }
        ans = Math.max(ans, r-i+1)
    }
    return ans
};

console.log(lengthOfLongestSubstring('pwwkew'))