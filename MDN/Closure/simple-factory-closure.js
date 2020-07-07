// 简单函数工厂，制作闭包函数
function makeAdder(x) {
    return function(y) {
        return x + y
    }
}

var add5 = makeAdder(5)
var add10 = makeAdder(10)

console.log(add5(5))
console.log(add10(5))
// 10
// 15

