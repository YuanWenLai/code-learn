/* 
1 全局函数模式，将不同的功能封装成不同的全局函数
2 问题：Global被污染了，容易引起命名冲突
*/

let data = "halo m1"

function foo() {
    console.log('halo foo')
}

function bar() {
    console.log("halo bar")
}

