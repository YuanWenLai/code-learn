// KMP算法简单尝试


// ts为主串
// ps为模式串
function KMP(ts,ps) {
    const t = ts.split('')
    const p = ps.split('')

    let i = 0  // 主串的位置

    let j = 0 // 模式串的位置

    let next = getNext(ps)

    while(i<t.length && j<p.length) {
        if(j == -1 || t[i] == p[j]) {
            // 当j为-1时，要移动的是i，当然j也要归0
            i++
            j++
        }else {
            // 此时i不需要回溯
            j = next[j]  // j回到指定位置
        }
    }

    if(j == p.length) {
        return i - j
    }else {
        return -1
    }
}

function getNext(ps) {
    const p = ps.split('')
    const next  = new Array(p.length)

    next[0] = -1

    let j = 0
    let k = -1

    while(j < p.length - 1) {
        if(k == -1 || p[j] == p[k]) {
            if(p[++j] == p[++k]) {
                // 当两个字符相等时要跳过
                next[j] = next[k]
            }else {
                next[j] = k
            }
        }else {
            k = next[k]
        }
    }

    return next
}

console.log(KMP('',''))