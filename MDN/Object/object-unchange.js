// js对象的不变性

const log = console.log

// 1.不变性-禁止对象扩展
var obj = {
    a: 2
}

Object.preventExtensions(obj)

obj.a = 2333
obj.b = 234

log(obj)
// { a: 2333 }

// 结论：preventExtensions这个方法是禁止对象添加属性，保留原来的属性


// 2.不变性-密封
log('*********************************')
var obj2 = {
    b: 444
}
Object.seal(obj2)
obj2.a = 2
obj2.b = 555
log(obj2)
// { b: 555 }
delete obj2.b
log(obj2)
//{ b: 555 } 删除属性b失败

// 结论：Object.seal的方法会先调用preventExtensions，再把属性的configurable设置为false
// 即seal不仅不可以添加属性，而且不可以对现有的属性进行删除等操作，但可以改变值


// 3.冻结
log('*********************************')
var obj3 = {
    c: 666
}

Object.freeze(obj3)

obj3.a = 344
obj3.c = 222
log(obj3)
// { c: 666 }

// 结论：对象被冻结之后，无法进行任何操作





