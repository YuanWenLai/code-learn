/* 
1 全局函数模式，将不同的功能封装成不同的全局函数
2 问题：Global被污染了，容易引起命名冲突
*/

let data2 = "halo m2"

function foo() { // 与module1的foo冲突
    console.log('halo m2 foo')
}

