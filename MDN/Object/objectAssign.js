// Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。

const target = {
    a:1,
    b:2
}

const source = {
    b:3,
    c:4
}

const returnTarget = Object.assign(target, source)
console.log("target", target)
console.log("returnTarget", returnTarget)


// 针对深拷贝，需要使用其他办法，因为 Object.assign()拷贝的是（可枚举）属性值。
// 假如源值是一个对象的引用，它仅仅会复制其引用值。
const log = console.log
    log("****************")
function test() {
    'usr strict'
    
    let obj1 = {
        a:0, 
        b: {
            c: 0
        }
    }
    let obj2 = Object.assign({}, obj1)
    log(obj2)

    // 改变目标的值
    log('change obj1 value')
    obj1.a = 233
    log(obj1)
    log(obj2)

    // 改变源对象的值
    log("change obj2 value")
    obj2.a = 666
    log(obj1)
    log(obj2)

    // 改变obj1的属性中对象的值
    log("change obj1 value of Object")
    obj1.b.c = 999
    log(obj1)
    log(obj2)
    // { a: 233, b: { c: 999 } }
    // { a: 666, b: { c: 999 } }

    // 结论：假如源值是一个对象的引用，它仅仅会复制其引用值。因此此拷贝只是浅复制


    // 深度拷贝方法一：JSON.parse(JSON.stringify(obj1))
    log("*************************")
    let obj3 = {
        name: 'cavin',
        age: {
            value: 24,
            brith: 1996
        }
    }
    let obj4 = JSON.parse(JSON.stringify(obj3))
    obj3.name = 'yuan'
    obj3.age.brith = 1997
    log(obj3)
    log(obj4)
    // { name: 'yuan', age: { value: 24, brith: 1997 } }
    // { name: 'cavin', age: { value: 24, brith: 1996 } }
    
    // 总结： 深度拷贝后，obj4的值不会根据obj3改变而改变
}

test()