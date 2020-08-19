function *foo() {
    var x = yield 2
    z++ 
    var y = yield(x*z)
    console.log(x, y, z)
}

var z = 1

var it1 = foo()

var it2 = foo()

var v1 = it1.next().value
console.log("v1", v1)
var v2 = it2.next().value
console.log("v2", v2)

v1 = it1.next(v2 * 10).value
console.log("v1", v1)
v2 = it2.next(v1 * 5).value
console.log("v2", v2)

it1.next(v2 / 2)
it2.next(v1 / 4)

// v1 2
// v2 2
// v1 40
// v2 600
// 20 300 3
// 200 10 3



