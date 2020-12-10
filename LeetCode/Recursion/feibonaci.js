
// 斐波那契数列，使用递归
function feibonaci1(n) {
    if(n == 0) return 0
    if(n == 1) return 1

    let ret = feibonaci1(n-1) + feibonaci1(n-2)
    return ret
}

console.time()
console.log(feibonaci1(40))
console.timeEnd()

// 102334155
// default: 1228.166ms

// 斐波那契数列，使用优化变量
function feibonaci2(n) {
    if(n == 0) return 0
    if(n == 1) return 1

    let pre = 0
    let next = 1
    let ret 
    for(let i = 0;i<n-1;i++) {
        ret = pre + next
        pre = next
        next = ret
    }
    // if(ret > 1000000007) {
    //     ret = ret % 1000000007
    // }
    return ret
}

console.time()
console.log(feibonaci2(10))
console.timeEnd()

// 102334155
// default: 2.586ms