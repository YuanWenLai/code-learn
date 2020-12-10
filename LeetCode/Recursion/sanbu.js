// 三步问题
// 三步问题。有个小孩正在上楼梯，楼梯有n阶台阶，小孩一次可以上1阶、2阶或3阶。实现一种方法，计算小孩有多少种上楼梯的方式。结果可能很大，你需要对结果模1000000007。

function sanbu(n) {
    if(n == 0) return 1 
    if(n == 1) return 1 
    if(n == 2) return 2


    let a = 1
    let b = 1
    let c = 2
    let ret = 0
    for(let i = 0;i<n-2;i++){
        ret = a + b + c
        a = b
        b = c
        c = ret
    }
    return ret
}

console.time()
console.log(sanbu(5))
console.timeEnd()

