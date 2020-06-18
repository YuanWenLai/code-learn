// apply() 方法调用一个具有给定this值的函数，以及作为一个数组（或类似数组对象）提供的参数

// 注意：call()方法的作用和 apply() 方法类似，区别就是call()方法接受的是参数列表，而apply()方法接受的是一个参数数组。
const log = console.log

const numbers = [2,5,1,6,22]

const maxNum = Math.max.apply(null, numbers)
console.log("maxNum", maxNum)

const minNum = Math.min.call(null, ...numbers)
console.log("minNum", minNum)


// maxNum 22
// minNum 1


// 参数1
// thisArg
// 必选的。在 func 函数运行时使用的 this 值。
// 请注意，this可能不是该方法看到的实际值：如果这个函数处于非严格模式下
// ，则指定为 null 或 undefined 时会自动替换为指向全局对象，原始值会被包装。

// 参数2
// argsArray
// 可选的。一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 
// func 函数。如果该参数的值为 null 或  undefined，则表示不需要传入任何参数。
// 从ECMAScript 5 开始可以使用类数组对象。

log("********************************")
// 使用1，将数组添加到另外一个数组

// concat
const arr = [1,3]
const arr1= [2, 4]
const ret = Array.prototype.concat(arr,arr1)
console.log("ret", ret)
// ret [ 1, 3, 2, 4 ]
// 此方法不会对原数组改变，返回一个新的数组

// es6结构解析法
const ret1 = [...arr, ...arr1]
console.log("ret1", ret1)

// ret1 [ 1, 3, 2, 4 ]
// 此方法与concat一样，不会对原数组发生改变

// apply or call
arr.push.apply(arr, arr1)
// arr.push.call(arr, arr1)
// arr.push(...arr1)
console.log("arr", arr)
// arr [ 1, 3, 2, 4 ]
// 此方法会直接向arr数组中push入新的元素




