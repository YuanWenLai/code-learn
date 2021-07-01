// CommonJS规范加载模块是同步的

let m1 = require("./module/module1")
let m2 = require("./module/module2")
let m3 = require("./module/module3")

m1.foo() //m1 foo()
m2() // module2 
m3.foo()
console.log(m3.arr) // [ 1, 2, 3, 3, 2 ]