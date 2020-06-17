// Object.freeze() 方法可以冻结一个对象。
// 一个被冻结的对象再也不能被修改；
// 冻结了一个对象则不能向这个对象添加新的属性，
// 不能删除已有属性，不能修改该对象已有属性的可枚举性、
// 可配置性、可写性，以及不能修改已有属性的值。
// 此外，冻结一个对象后该对象的原型也不能被修改。
// freeze() 返回和传入的参数相同的对象

const log = console.log

const obj = {
    prop : 42
}

Object.freeze(obj)

obj.prop = 66

log(obj.prop)  // 42

// 结论：被冻结的对象不支持任何修改操作


log("*********************")
// 能修改对象中的对象吗？

const obj2 = {
    a: {
        b: 1
    },
    arr: [1,2,3]
}

Object.freeze(obj2)
obj2.a.b = 3
log(obj2.a.b) // 3

obj2.arr[0] = 666

log(obj2.arr)
// 结论：如果一个属性的值是个对象，则这个对象中的属性是可以修改的，除非它也是个冻结对象
// 结论： 若是对象里面的值数组的话，数组里面的元素也可以被改变
// 因此冻结的只是他们引用地址和存储空间，冻结引用地址类似于const的用法


// 能直接冻结数组吗？
log("****************")

let arr = [1,2,3]

Object.freeze(arr)
arr[0] = 888
log(arr)  // [1,2,3]

// 结论：同理，数组也是堆储存，因此冻结的是其引用地址


// 深度冻结，缺点，容易冻结不该冻结的对象，如window

log("*****************")
function deepFreeze(obj) {
    // 获取obj上的属性名
    var propNames = Object.getOwnPropertyNames(obj)

    // 冻结obj本身之前，冻结其属性
    propNames.forEach(function(name){
        var prop = obj[name]

        // 如果prop是哥对象，冻结它
        if(typeof prop === 'object' && prop !== null) {
            deepFreeze(prop)
        }
    })
    // 冻结自身obj再返回
    return Object.freeze(obj)
}

let deepObj = {
    a: {
        c: 123
    }
}

deepFreeze(deepObj)
deepObj.a.c = 666

log(deepObj.a.c) // 123

// 结论： 开启递归的深度冻结，先对象的子属性冻结完，最后冻结本身，达到深度冻结






