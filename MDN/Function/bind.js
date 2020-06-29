// bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，
// 而其余参数将作为新函数的参数，供调用时使用。

// demo1 新手最容易犯的错，this的指定对象不熟悉


const log = console.log

this.x = 9;    // 在浏览器中，this 指向全局的 "window" 对象
var module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX(); // 81

var retrieveX = module.getX;

log(retrieveX())   
//在浏览器 返回 9 - 因为函数是在全局作用域中调用的
// 在node的环境中返回undefined，因为node环境中没有window这个对象

// 创建一个新函数，把 'this' 绑定到 module 对象
// 新手可能会将全局变量 x 与 module 的属性 x 混淆
var boundGetX = retrieveX.bind(module);
log(boundGetX()) // 81