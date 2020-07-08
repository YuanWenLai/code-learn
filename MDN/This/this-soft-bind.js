// this的软绑定

if(!Function.prototype.softBind) {
    
    Function.prototype.softBind = function(obj) {
        // debugger
        var fn = this
        // 捕获所以的curried参数
        var curried = [].slice.call(arguments, 1)
        var bound = function() {
            return fn.apply(
                (!this || this === (window || global)) ?
                obj : this,
                curried.concat.apply(curried, arguments)
            )
        }
        bound.prototype = Object.create( fn.prototype )
        return bound
    }
}

//实现软绑定
function foo() {
    console.log("name:  " + this.name)
}

var obj = {name: 'cavin'}
var obj2 = {name: 'cavin2'}
var obj3 = {name: 'cavin3'}


var fooObj = foo.softBind(obj)

fooObj() //name:  cavin

obj2.foo = foo.softBind(obj)
obj2.foo() // name:  cavin2

fooObj.call(obj3) // name:  cavin3

setTimeout(obj2.foo, 10) // name:  cavin

// 软绑定可以修改this的指向
