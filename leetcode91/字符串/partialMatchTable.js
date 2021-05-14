// ABCDAB，算出一张《部分匹配表》（Partial Match Table）


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

console.log(getPartialMatchTable('ABCDABD'))