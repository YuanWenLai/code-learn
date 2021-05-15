// KMP算法简单尝试


// ts为主串
// ps为模式串
function KMP(source,pattern) {
    if(source === pattern) return 0
    let partMatch = getPartialMatchTable(pattern),
        source_len = source.length,
        pattern_len = pattern.length,
        indexResult = []

    for(let i=0;i < source_len - pattern_len;i++) {
        let index = 0 // 模式串游标
        // console.log("  KMP ~ index", index)
        // console.log("  s1", source[i+index])
        // console.log("  p1", pattern[index])
        while(
            (source.charCodeAt(i+index) === pattern.charCodeAt(index)) &&
            (source_len - i > pattern_len)
        ){
            index ++
            console.log("  s1", source[index])
            console.log("  i", i)
            console.log("  index", index)
            console.log("  p1", pattern[index])
            console.log("**************")
            if(index === pattern_len) indexResult.push(i) // 游标的移动长度 = 模式串的长度，说明匹配，记录结果
        }
        if(index > 0) {
            let step = index - partMatch[index -1] - 1
            i += step
        }else {
            // 匹配失败
        }
        console.log("------------")
    }
    return indexResult.length === 0 ? -1 : indexResult
}

/**
 * @param {string} str
 * @return {Array}
 */
 function getPartialMatchTable(str) {
    let len = str.length
    let result = new Array(len).fill(0)
    for(let i=1;i<str.length;i++) {
        let child_str = str.substring(0,i+1)
        for(let j=0,j_len = child_str.length;j<j_len;j++) {
            let prefix = child_str.substring(0,j),
                suffix = child_str.substring(j_len-j,j_len)
            if(prefix === suffix && prefix !== '') {
                result[i] = prefix.length
            }
            if(![result[i]]) result[i] = 0
        }
    }
    return result
}

console.time()
console.log(KMP('BBC ABCDABABCDAB ABCDABCDABDE','ABCDABD'))
console.timeEnd()