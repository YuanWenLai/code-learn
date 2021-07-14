// js的执行顺序
var foo = function (params) {
    console.log('foo1')
}

foo()

var foo = function (params) {
    console.log('foo2')
}

foo()

// foo1
// foo2