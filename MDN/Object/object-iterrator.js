// 若普通对象没有遍历器iteration，自定义

var obj = {
    a:2,
    b:4
}

Object.defineProperty(obj, Symbol.iterator, {
    enumerable: false,
    writable: false,
    configurable: false,
    value: function() {
        var o = this
        var idx = 0
        var ks = Object.keys(o)
        return {
            next: function() {
                return {
                    value: o[ks[idx++]],
                    done: (idx > ks.length)
                }
            }
        }
    }
})

// 手动模拟遍历器（迭代器）
var it = obj[Symbol.iterator]()

console.log(it.next());
console.log(it.next());
console.log(it.next());
// { value: 2, done: false }
// { value: 4, done: false }
// { value: undefined, done: true }

// 用 for ... of 遍历obj
for(var v of obj){
    console.log(v)
}
// 2
// 4
