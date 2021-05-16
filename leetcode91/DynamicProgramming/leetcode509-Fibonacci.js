// 509. 斐波那契数
/**
 * @param {number} n
 * @return {number}
 */

// Time Complexity = o(2^N)    Time Complexity = o(N)
 var fib = function(n) {
    if(n == 0) return 0
    if(n == 1 || n == 2) return 1
    return fib(n-1) + fib(n-2)
};

// Time Complexity = o(N)    Time Complexity = o(N)
var fibBetter = function(n) {
    if(n == 0) return 0
    if(n == 1 || n == 2) return 1
    let fibArr = [1,1]
    for(let i=2;i<n;i++) {
        fibArr.push(fibArr[i-1]+fibArr[i-2])
    }
    return fibArr[fibArr.length-1]
};


// Time Complexity = o(N)    Time Complexity = o(1)
var fibDP= function(n) {
    if(n == 0) return 0
    if(n == 1 || n == 2) return 1
    let p = 0,q=0,r= 1
    for(let i=2;i<=n;i++) {
        p = q
        q = r
        r = p+q
    }
    return r
};


console.time()
console.log(fib(40))
console.timeEnd()

console.time()
console.log(fibBetter(40))
console.timeEnd()

console.time()
console.log(fibDP(40))
console.timeEnd()
