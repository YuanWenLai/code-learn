// 3.显示绑定
// 可以运用的方法call，apply，bind

function foo2() {
    console.log(this.b)
}
var obj2 = {
    b: 2344,
    foo2:foo2
}
foo2.call(obj2) // 2344
foo2.apply(obj2) // 2344
var boundFunc = obj2.foo2.bind(obj2,2) 
console.log("boundFunc", boundFunc())//2344

// 硬绑定后，不能再修改它的this
var b = 'test hard bind'

// boundFunc.call(window) // 2344，不是test hard bind

// 结论：硬绑定后，无法再次修改绑定的作用域

// 硬绑定的典型场景
function foo3(something) {
    console.log(this.a, something)
    return this.a + something
}

var obj3 = {
    a: 2
}

var bar3 = function() {
    return foo3.apply(obj3, arguments)
}
var b = bar3(3)
console.log(b)
// 2 3
// 5

var bar4 = foo3.bind(obj3)
var c = bar4(3)
console.log("c", c)
// 2 3
// c 5

