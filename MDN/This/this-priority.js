// this绑定的优先级

// 默认绑定 < 隐式绑定 < 显示绑定 < new

function foo() {
    console.log(this.a)
}

var obj1 = {
    a: 2,
    foo:foo
}

var obj2 = {
    a: 3,
    foo: foo
}

obj1.foo()
obj2.foo()
// 2
// 3


obj1.foo.call(obj2)
obj2.foo.call(obj1)
// 3
// 2

//结论：显示绑定优先级高于隐式绑定
