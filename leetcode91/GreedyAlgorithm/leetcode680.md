### 思路

贪心:局部最优，达到全局最优
重点：不改变s的其他字符顺序下，最多删除一个字符

### 代码

```js
var validPalindrome = function(s) {
    let l=0
    let r = s.length-1
    while (l < r) {
        // 第一次判断出不是回文，还不能判死刑
        // 有一次删减字符的机会
        if(str[l] != str[r]) {
            return isPali(str,l+1,r) || isPali(str,l,r-1)
        }
        // 缩减判断范围
        l++
        r--
    }
    return true
};

function isPali(str,l,r) {
    // 回文字符串，只能删减一次字符，二次判断不是回文，就return false，死刑
    while (l < r) {
        if(str[l] != str[r]) {
            return false
        }
        // 缩减判断范围
        l++
        r--
    }
    return true
}
```

**复杂度分析** - 时间复杂度：O(N) 。 - 空间复杂度：O（1）
