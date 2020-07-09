// 原型链继承的隐式继承的屏蔽的缺点

var anthorObj = {
    a: 2
}

var myObj = Object.create(anthorObj)

console.log(anthorObj.a)
console.log(myObj.a)
// 2
// 2

console.log(anthorObj.hasOwnProperty('a'))
console.log(myObj.hasOwnProperty('a'))
// true
// false

myObj.a++
console.log(anthorObj.a)
console.log(myObj.a)
// 2
// 3

// 结论：尽管 myObject.a++ 看起来应该（通过委托）查找并增加 anotherObject.a 属性，
// 但是别忘 了 ++ 操作相当于 myObject.a = myObject.a + 1。
// 因此 ++ 操作首先会通过 [[Prototype]] 查找属性 a 并从 anotherObject.a 获取
// 当前属性值 2，然后给这个值加 1，接着用 [[Put]] 将值 3 赋给 myObject 
// 中新建的屏蔽属性 a，天呐！
