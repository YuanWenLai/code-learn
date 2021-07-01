define(function (require,exports,module) {
    var data ='www.baidu.com'

    function show() {
        console.log('m1 show()'+data)
    }

    // 抛出方法
    exports.show = show
})