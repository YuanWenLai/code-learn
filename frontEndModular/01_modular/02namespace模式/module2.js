/* 
1 namespace模式：简答对象封装
2 作用：减少了全局变量
3 问题：不安全（数据不是私有的，外部可以直接修改）
*/

let myModule2 = {
    data: "halo name m2",
    foo() {
        console.log('halo name m2 foo',this.data)
    },
    bar() {
        console.log("halo name m2 bar",this.data)
    }
}


