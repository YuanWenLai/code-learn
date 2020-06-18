// 使用concat扁平化二维数组
const log = console.log

const arr = [[1,2],[3,4]]

// apply的参数是target和数组
const arrRet = Array.prototype.concat.apply([],arr)

console.log("arrRet", arrRet)
// arrRet [ 1, 2, 3, 4 ]


// call的参数是target和多个参数
const arrRet2 = Array.prototype.concat.call([],...arr)
console.log("arrRet2", arrRet2)
// arrRet2 [ 1, 2, 3, 4 ]

log("******************************")
// 问题： 用concat方法能扁平化三维数组以上吗

const arr2 = [[[1,2],[3,4]],[[5,6],[7,8]]]

const arr2Ret = Array.prototype.concat.apply([],arr2)
console.log("arr2Ret", arr2Ret)

// arr2Ret [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ] ]

const arr2Ret2 = Array.prototype.concat.call([],...arr2)
console.log("arr2Ret2", arr2Ret2)

// arr2Ret2 [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ] ]

// 結論: 此方法无法扁平化三维数组以上