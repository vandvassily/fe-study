// 原型

function Animal() {
    this.value = 'animal';
}

Animal.prototype.run = function () {
    return this.value + ' is runing';
}

function Cat() { }

// 这里是关键，创建 Animal 的实例，并将该实例赋值给 Cat.prototype
// 相当于 Cat.prototype.__proto__ = Animal.prototype
Cat.prototype = new Animal();

Cat.prototype.kind = 'rogdoll'

var cat = new Cat();
console.log(cat);

function Person(){}

var p = new Person()
console.log(p.__proto__ === Person.prototype)
console.log(Person.prototype.__proto__ === Object.prototype)

console.log(p.__proto__.__proto__.__proto__ === null)

var a = {}
console.log(a.__proto__ === Object.prototype)

// Object
console.log(Person.__proto__ === Function.prototype)
console.log(Object.__proto__ === Function.prototype)
console.log(Function.__proto__ === Function.prototype)

console.log(Function.prototype.__proto__ === Object.prototype)

console.log(Object.prototype.__proto__ === null);

console.log(Function.prototype.__proto__ === Object.prototype)


// function Foo() {
//     return 'foo';
// }
// Foo.prototype.method = function () {
//     return 'method';
// }
// function Bar() {
//     return 'bar';
// }
// // Bar.prototype = Foo; // Bar.prototype 指向到函数
// Bar.prototype = new Foo(); // Bar.prototype 指向到函数

// let bar = new Bar();
// console.dir(bar);
// function Parent() {
//     this.age = 12;
// }

// var p = new Parent()

// console.log(Symbol.prototype);

// // Parent.prototype.say = function(){
// //     console.log(123);
// // }

// console.log(p.__proto__);
// console.log(Parent.prototype);



// Parent.prototype = {
//     say: function() {

//     }
// }

// function Son() {

// }

// Son.prototype = new Parent()
// Son.prototype.foo = 'hello world'

// console.log(Son.prototype.constructor === Object);

// Son.prototype.constructor = Son

// var son = new Son()
// console.log(son);
// console.log(Parent.prototype.constructor);
