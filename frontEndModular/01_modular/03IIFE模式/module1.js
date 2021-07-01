// 背景：js在es6之前，只有全局作用域和函数作用域

/* 
1 IIFE模式：自执行函数（闭包）
2 作用：数据是私有的，外部只能通过暴露的方法进行操作
3 问题：如果当前模块依赖另外一个模块，该怎么办
*/

(function(){
    console.log("halo IIFE")
})();

(function(window) {
    let data = "i am IIFE Data"

    // 操作数据的函数
    function foo() {
        console.log(`foo()${data}`)
    }

    // 操作数据的函数
    function bar() {
        console.log(`bar()${data}`)

        // 内部调用
        otherFun()
    }

    function otherFun() {
        console.log('i am other fun')
    }

    // 暴露内部私有函数，通过window挂载到全局
    window.myModule = { foo, bar}
})(window)


