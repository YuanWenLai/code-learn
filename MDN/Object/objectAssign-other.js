// 原始类型会被包装为对象
const log = console.log

const v1 = '21'
const v2 = true
const v3 = 10
const v4 = Symbol('foo')

const obj = Object.assign({},v1,v2,v3,v4)

log(obj)

// { '0': '2', '1': '1' } ?????


// 异常会打断后续拷贝任务

log("*************************")
const target = Object.defineProperty({},"name", {
    value: 'cavin',
    writable: false
})

Object.assign(target,
    { bar: 2},
    {
        foo2:3,
        name: "yuan",
        foo3: 545 
    },
    { age: 24}
    )
log(target.name)

// Cannot assign to read only property 'name' of object