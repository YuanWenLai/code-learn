// 205. 同构字符串

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    let S = Object.create(null), T = Object.create(null), i = -1
    while (i++ < s.length) {
        const a = s[i], b = t[i]
        if (S[a] !== T[b]) return false
        S[a] = i
        T[b] = i
    }
    return true
};

// see:https://leetcode-cn.com/problems/isomorphic-strings/solution/suo-yin-yuan-zu-dan-shuang-ha-xi-biao-5j-mxra/