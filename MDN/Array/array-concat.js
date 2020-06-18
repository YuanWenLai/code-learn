// concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。

const log = console.log

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const arr3 = Array.prototype.concat(arr1, arr2)
console.log("arr3", arr3)

const arr4 = arr1.concat(arr2)
console.log("arr4", arr4)

arr2[0] = 44

log(arr2) // [ 44, 5, 6 ]

log(arr3)
// arr3 [ 1, 2, 3, 4, 5, 6 ]
// arr4 [ 1, 2, 3, 4, 5, 6 ]

// 结论： Array.concat只会对原数组进行浅复制，不会影响原先数组

log("***************************")
// 可以连接三个数值以上吗？

const a3 = [7,8,9]
const a4 = [10,11,12]

const ret = Array.prototype.concat(arr1, arr2, a3, a4)
console.log("ret", ret)


