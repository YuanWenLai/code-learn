// 类数组对象 
// slice 方法可以用来将一个类数组（Array-like）对象/集合转换成一个新数组

function list() {
    //return Array.prototype.slice.call(arguments)
    return Array.prototype.slice.apply(arguments)
}

var list1 = list(1,2,3,4)
console.log("list1", list1)

// list1 [ 1, 2, 3, 4 ]

var arrlikeToArr = [].slice.call([1,2,3])
console.log("arrlikeToArr", arrlikeToArr)

console.log("*******************************")
// 可以使用 bind 来简化该过程

const unboundSlice = Array.prototype.slice

const slice = Function.prototype.call.bind(unboundSlice)

function list2() {
    return slice(arguments)
}

const arrLike2 = list2(1,2,33,4,5,6)
console.log("arrLike2", arrLike2)

// arrLike2 [ 1, 2, 33, 4, 5, 6 ]