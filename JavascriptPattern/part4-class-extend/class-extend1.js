const log = console.log
// class person
// summery:类式继承
function Person(name) {
    this.name = name
}
Person.prototype.getName = function() {
    return this.name
}

var reader = new Person("cavin")
console.log("reader", reader.getName())
// reader cavin



//****************************** */
//原型链继承
function Author(name, books){
    Person.call(this, name)  // 调用父类的构造函数作用域在此
    this.books = books
}

Author.prototype = new Person() // 设置原型链
Author.prototype.constructor = Author // 设置构造函数对象
Author.prototype.getBooks = function(){
    return this.books
}

// 原型链继承总结：别的语言一句extend完成继承，js用原型链实现继承比较复杂

var author = []
author[0] = new Author('cavin',['javascript design patterns'])
author[1] = new Author('amy',["javascript"])

log(author[0].getName())
log(author[1].getBooks())
// cavin
// [ 'javascript' ]

// 结论：原型继承的实现与其他继承实现一样简单。


//********************* */
// 为了简化原型链的实现，可以将继承封装为extend函数

function extend(subClass, superClass) {
    var F = function() {}
    F.prototype = superClass.prototype
    subClass.prototype = new F()
    subClass.prototype.constructor = subClass
}

function Teacher(name, age) {
    Person.call(this, name)
    this.age = age
}
extend(Teacher, Person)
Teacher.prototype.getAge = function(){
    return this.age
}

// 实现：
var teacher = new Teacher('lili', 25)
log(teacher.getName())
log(teacher.getAge())
// lili
// 25


//*******************************8 */
// 原型式继承，就是克隆继承

function clone(object) {
    function F(){}
    F.prototype = object
    return new F
}

var authorClone = clone(Author)
let authorCloneName = authorClone.name
log(authorCloneName)// Author
authorCloneName = 'cavin'
log(authorCloneName) // cavin

// 总结：原型式继承，简单就是克隆，会在原型上一步步找需要的字面量

// 如果对象是数组，数组是引用对象，需要在克隆对象上新建数组，不然会污染原始的数组
// 因此原型上的数组和子对象最好别直接声明，用工厂方法，函数返回一个对象或数组


