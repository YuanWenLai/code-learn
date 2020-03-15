/**
 * @description:proxy的get实现数组读取负数的索引 
 * @param {type} 
 * @return: 
 */
// 剩下疑点？Reflect
function creatArry(...element) {
    let handler = {
        get(target, propKey, receiver) {
            let index = Number(propKey)
            console.log(propKey)
            if (index < 0) {
                propKey = String(target.length + index);
            }
            return Reflect.get(target, propKey, receiver)
        }
    }
    let target = []
    target.push(...element)
    return new Proxy(target, handler)
}


/**
 * @description: 利用proxy实现链式调用
 * @param {type} 
 * @return: 
 */

var pipe = (function() {
    return function(value) {
        var funcStack = [];
        var oproxy = new Proxy({}, {
            get: function(pipeObject, fnName) {
                if (fnName === 'get') {
                    return funcStack.reduce(function(val, fn) {
                        return fn(val);
                    }, value);
                }
                funcStack.push(window[fnName]);
                return oproxy;
            }
        });

        return oproxy;
    }
}());


export {
    creatArry,
    pipe
}