// 680. 验证回文字符串 Ⅱ

/**
 * @param {string} s
 * @return {boolean}
 */
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