// 使用apply来链接一个对象构造器，类似于Java

const log = console.log

Function.prototype.construct = function(aArgs) {
    
    var oNew = Object.create(this.prototype);
    this.apply(oNew, aArgs);
    return oNew;
}

// 使用实例：
function MyConstructor(arguments) {
    for (var nProp = 0; nProp < arguments.length; nProp++) {
        this["property" + nProp] = arguments[nProp];
        //log(this)
    }
}

var myArray = [4, "Hello world!", false];
var myInstance = new MyConstructor(myArray);

log(myInstance.property1)
log(myInstance instanceof MyConstructor)
log(myInstance.constructor)


// Hello world!
// true
// [Function: MyConstructor]