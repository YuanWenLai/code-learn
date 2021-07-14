function foo(params) {
    console.log('foo1')
}

foo()

function foo(params) {
    console.log('foo2')
}

foo()

// foo2
// foo2

console.log(this)
console.log(global)
console.log(global.foo)