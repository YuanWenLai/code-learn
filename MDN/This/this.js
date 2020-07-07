// 1.默认绑定
function foo() {
    console.log(this.a)
}
var a =2
foo()
// this的指向是全局作用域window，node环境获取undefined
// 2 


// 隐式绑定
var obj = {
    a: 233,
    foo: foo
}

obj.foo() // 233

// 2.隐式调用，将this作用域绑定到obj中，this指向obj

// 2.1但隐式绑定会导致一些二隐式丢失的问题
var bar = obj.foo

a = "change a value"

bar() // 在浏览器环境中，全局作用域，window指向a = ‘change a value’
// change a value
// 虽然 bar 是 obj.foo 的一个引用，但是实际上，它引用的是 foo 函数本身，
//因此此时的 bar() 其实是一个不带任何修饰的函数调用，因此应用了默认绑定

// 2.2当参数作为回调函数传入
function doFoo(fn) {
    fn()
}

doFoo(obj.foo) //change a value
// 在doFoo的作用域中，RHS寻a的引用无，因此在全局作用域中寻找



console.log("*************************")


