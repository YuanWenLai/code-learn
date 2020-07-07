// 函数柯里化

const log = console.log
// 1.普通函数add
function add(x,y) {
    return x+y
}

// currying后
function curryingAdd(x){
    return function(y){
        return x+y
    }
}

log(add(1,5))
log(curryingAdd(1)(5))

// 6
// 6

// 2.函数柯里化的好处之一
// 封装通用函数复用，例如封装正则校验

// 正常的正则校验
function check(reg, text) {
    log(reg.test(text))
}

check(/\d+/g,'test')
check(/[a-z]/g,'test')
// false
// true

// 通过currying柯里化后，实现复用
function curryingCheck(reg) {
    return function(text) {
        return reg.test(text)
    }
}
var isNumber = curryingCheck(/\d+/g)
var isLetter = curryingCheck(/[a-z]/g)

log(isNumber(23))
log(isNumber("23"))
log(isLetter("asd"))
log(isLetter(233))
// true
// false
// true
// false
