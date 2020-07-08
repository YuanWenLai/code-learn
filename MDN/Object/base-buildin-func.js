// 内置的对象的声明不同

const log = console.log
var  strPrimitive = 'cavin'

log(typeof strPrimitive)
log(strPrimitive instanceof String)
// string
// false


var strObject = new String('i am obj')
log(typeof strObject)
log(strObject instanceof String)
// object
// true


// 检查sub-type对象
log(Object.prototype.toString.call(strObject))
// [object String]

log(Object.prototype.toString.call(strPrimitive))
// [object String]

// 结论：
// 原始值 "I am a string" 并不是一个对象，它只是一个字面量，并且是一个不可变的值。
// 字面量无法继承String的一些方法，如长度，访问某个字符
// 但是js引擎会自动将字面量转化成一个string对象
log(strPrimitive.length) // 5


