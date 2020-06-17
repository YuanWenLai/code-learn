
// Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。
// 参数1：proto 新创建对象的原型对象。
// 参数2：propertiesObject 可选
const person = {
    isHuman: false,
    say: function() {
        console.log(`my name is ${this.name},human? ${this.isHuman}`)
    }
}


const me = Object.create(person)

me.name = 'cavin'
me.isHuman = true

me.say()


/************************ */

// 实现类的继承
// father calss
function Shape() {
    this.x = 0
    this.y = 0
}

// father method
Shape.prototype.move = function(x, y) {
    this.x += x
    this.y += y
    console.info(`shape move 2*2 step x:${this.x} & y:${this.y}`)
}

// subClass
function Rectangle() {
    Shape.call(this)  // call super construtor
}

// son inherit father
Rectangle.prototype = Object.create(Shape.prototype)
Rectangle.prototype.constructor = Rectangle

var rect = new Rectangle()
console.log("rect is an instance of Rectangle", rect instanceof Rectangle)
console.log("rect is an instance of Shape", rect instanceof Shape)

rect.move(5,3)

console.log("################################")

// 使用第二个参数propertyObject
var obj = Object.create(Object.prototype,{
    foo: {
        writable:true,
        configurable: true,
        value: 'hello world!'
    },
    name: {
        configurable: true,
        get: function() {return 'cavin'},
        set: function(value) {
            console.log("Set name",name)
        },
        enumerable: true
    }
})

console.log(obj.name)
console.log(obj.foo)
