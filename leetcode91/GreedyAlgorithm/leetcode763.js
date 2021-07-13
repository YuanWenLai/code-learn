// 763. 划分字母区间

/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    // 先用hash表来记录每个字母的最远区域
    let hash = {}
    for(let i=0;i<s.length;i++) {
        hash[s[i]] = i
    }

    // 声明结果表
    let ret = []
    let right = 0
    let left = 0

    // 寻找划分区域
    for(let i=0;i<s.length;i++) {
        right = Math.max(right,hash[s[i]])
        // 若当前位置与最远标识相同，则可以作为划分区域
        if(i === right) {
            ret.push(right-left+1)
            // 更换下一个起始点的标识
            left = i+1
        }
    }

    return ret
};