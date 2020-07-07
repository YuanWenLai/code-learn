// 柯里化经典面试题
// 实现一个add方法，使计算结果能够满足如下预期：
// add(1)(2)(3) = 6;
// add(1, 2, 3)(4) = 10;
// add(1)(2)(3)(4)(5) = 15;

function add() {

    // 第一次执行，储存所有参数有
    var _args = Array.prototype.slice.call(arguments)

    // 在内部声明一个函数，利用闭包的特性，保存_args和手机所以参数的值
    var _adder = function() {
        _args.push(...arguments);
        return _adder;
    };
    // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
    _adder.toString = function () {
        return _args.reduce(function (a, b) {
            return a + b;
        });
    }
    return _adder;
}


var demo1 = add(1)(2)(3)
console.log("demo1", demo1())


