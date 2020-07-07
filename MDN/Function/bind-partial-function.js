// 偏函数
// bind() 的另一个最简单的用法是使一个函数拥有预设的初始参数
//bind的偏函数设定就是一种函数柯里化
function list(){
    return Array.prototype.slice.call(arguments)
}

const list1 = list(1,3,4,1,23,31)
console.log("list1", list1)
// list1 [ 1, 3, 4, 1, 23, 31 ]

function addArg(arg1, arg2) {
    return arg1 + arg2
}

const ret = addArg(2,3)
console.log("ret", ret)
// ret 5

//*************************************************************** */

// 创建一个偏函数，让list预设第一个参数
let preSetArg = list.bind(null, 2333)

let preRet = preSetArg(1,2,3,4,5)
console.log("preRet", preRet)
// preRet [ 2333, 1, 2, 3, 4, 5 ]

let preAddArg  = addArg.bind(null, 23)

let preAddRet = preAddArg(6,66)
console.log("preAddRet", preAddRet)

// preAddRet 29

// 结论：当函数有预设值时，超过的参数会被忽略

// 问题1：可否预设第二个，第三个参数
let preSetArg2 = list.bind(null, null,222)
let preRet2 = preSetArg2(1,2,3,4)
console.log("preRet2", preRet2)
// preRet2 [ null, 222, 1, 2, 3, 4 ]
// 暂未寻找到解决方法

// 问题2：绑定的函数再次绑定，会如何
let bindOnce = preSetArg.bind(null,3344)
let bindRet = bindOnce(1,2,3)
console.log("bindRet", bindRet)
// preRet2 [ null, 222, 1, 2, 3, 4 ]
// 结论：对已经绑定的函数再次进行绑定时，其实就是衍生出多个已经代理的偏函数，返回一个多次绑定的函数










