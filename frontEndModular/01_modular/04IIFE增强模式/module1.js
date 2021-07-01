// 背景：js在es6之前，只有全局作用域和函数作用域

/* 
1 IIFE加强模式：可以用函数作为入参传入，作为传输数据的桥梁
*/
var data = function name(params) {
    return '233'
};

(function(window,data) {

    // 操作数据的函数
    function foo() {
        console.log(`foo()${data()}`)
    }

    // 暴露内部私有函数，通过window挂载到全局
    window.myModule = { foo,}
})(window,data)


