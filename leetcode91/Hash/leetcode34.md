### 思路

#### 串联所有单词的子串
哈希表-暴力解法

### 代码
```js
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
 var findSubstring = function(s, words) {
    if(!words || !words.length) return []

    const wordlen = words[0].length
    const allWordsLen = wordlen * words.length

    let res = []
    let hashMap = {}

    // 储存单个word的数量到哈希表
    for(let w of words) {
        hashMap[w] ? hashMap[w] ++ : hashMap[w] = 1
    }

    for(let i=0;i<s.length - allWordsLen+1;i++) {
        // 拷贝一份哈希表暂用
        let tempMap = Object.assign({},hashMap)
        for(let j=i;j<i+allWordsLen - wordlen +1;j += wordlen) {
            // 获取单个word
            let w = s.slice(j,j+wordlen)
            if(tempMap[w]) {
                tempMap[w]--
            }else {
                break
            }
        }

        // 检查暂用哈希表中，所有单词是否已经检验完了
        if( Object.values(tempMap).every(i => i === 0)) res.push(i)
    }

    return res
};
```

**复杂度分析** - 时间复杂度：O(MN)，M是word的长度   - 空间复杂度：O（N+M）
