// 青蛙跳台阶问题，可以跳1阶或2阶

function qingwaTaijie(n) {
    if(n == 0) return 1 
    if(n == 1) return 1 
    if(n == 2) return 2
    
    let a = 1
    let b = 2
    let ret = 1
    for(let i = 0;i<n-2;i++){
        ret = a + b
        a = b
        b = ret
    }

    return ret
}

console.time()
console.log(qingwaTaijie(4))
console.timeEnd()