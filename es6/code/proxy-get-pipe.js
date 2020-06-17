var pipe = function (value) {
    var funStack = []
    var oproxy = new Proxy({},{
        get: function(pipeObject, fnName) {
            if(fnName === 'get') {
                return funStack.reduce(function(val, fn) {
                    return fn(val)
                },value)
            }
            funStack.push(window[fnName])
            return oproxy
        }
    })
    return oproxy
}

var double = n => n*2
var pow = n => n*n
var reverseInt = n => n.toString().split('').reverse().join('') | 0

const result = pipe(3).double.pow.reverseInt.get
console.log("result", result)

