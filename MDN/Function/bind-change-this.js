// 在默认情况下，使用 window.setTimeout() 时，this 关键字会指向 window （或 global）对象。
// 当类的方法中需要 this 指向类的实例时，
// 你可能需要显式地把 this 绑定到回调函数，就不会丢失该实例的引用。

function LeateBloomer () {
    this.petaCount = Math.ceil(Math.random() * 12) +1
}

// 1s后声明bloom
LeateBloomer.prototype.bloom = function () {
    setTimeout(this.declare, 1000)
}

LeateBloomer.prototype.declare = function () {
    console.log('i am beautiful flower with' + this.petaCount + 'petals')
}

var flower = new LeateBloomer()

flower.bloom()


//若在计时器中，函数是作用域是全局作用域，调用this.declare，无法访问到this.petaCount
// 因此需要将LeateBloomer函数的this绑定到调用函数处