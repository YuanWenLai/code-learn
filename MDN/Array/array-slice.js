// slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝
// （包括 begin，不包括end）。原始数组不会被改变。


const log = console.log

const animals = ['tiger','ant', 'bison', 'camel', 'elephant']

log(animals.slice(1,3))

log(animals)

// [ 'ant', 'bison' ]
// [ 'tiger', 'ant', 'bison', 'camel', 'elephant' ]


// 结论：slice获取新的一个数组，返回得到一个浅复制的数组，且不会改变原数组


// slcie只是浅复制
// 若是基础元素，slice只复制其值，若是应引用对象，slice复制的是它的引用地址
// 因此数组中的对象被slice复制之后，对象储存堆中的值改变了，原数组中对象会发生改变，slice复制的数组对象也会发生改变
log("*******************************")

const arrObj = [
    {
        a: 1
    },
    "123"
]

const ret = arrObj.slice(0,1)
console.log("ret", ret)

arrObj[0].a = 666
log(arrObj)
console.log("ret", ret)

// 打印结果如下：
// ret [ { a: 1 } ]
// [ { a: 666 }, '123' ]
// ret [ { a: 666 } ]

// 结论：slice浅复制只复制基础类型的值和对象类型的引用地址

