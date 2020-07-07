// new绑定
function foo(a) {
    this.a= a
}

var bar = new foo(2) 
console.log("bar", bar)
// bar foo { a: 2 }




