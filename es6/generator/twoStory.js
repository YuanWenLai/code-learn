function *foo(x) {
    var  y = x * (yield "Hi")
    return y
}


var it = foo(6)

var res = it.next()

console.log("res", res)
// res { value: 'Hi', done: false }

res = it.next(6)
console.log("res", res)

// res { value: 36, done: true }  


