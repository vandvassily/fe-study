// 原型

// function Animal() {
//     this.value = 'animal';
// }

// Animal.prototype.run = function () {
//     return this.value + ' is runing';
// }

// function Cat() { }

// 这里是关键，创建 Animal 的实例，并将该实例赋值给 Cat.prototype
// 相当于 Cat.prototype.__proto__ = Animal.prototype
// Cat.prototype = new Animal();

// Cat.prototype.kind = 'rogdoll'

// var cat = new Cat();
// console.log(cat);

// function Person(){}

// var p = new Person()
// console.log(p.__proto__ === Person.prototype)
// console.log(Person.prototype.__proto__ === Object.prototype)

// console.log(p.__proto__.__proto__.__proto__ === null)

// var a = {}
// console.log(a.__proto__ === Object.prototype)

// // Object
// console.log(Person.__proto__ === Function.prototype)
// console.log(Object.__proto__ === Function.prototype)
// console.log(Function.__proto__ === Function.prototype)

// console.log(Function.prototype.__proto__ === Object.prototype)

// console.log(Object.prototype.__proto__ === null);

// // console.log(Function.prototype.__proto__ === Object.prototype)

// // function Foo() {
// //     return 'foo';
// // }
// // Foo.prototype.method = function () {
// //     return 'method';
// // }
// // function Bar() {
// //     return 'bar';
// // }
// // // Bar.prototype = Foo; // Bar.prototype 指向到函数
// // Bar.prototype = new Foo(); // Bar.prototype 指向到函数

// // let bar = new Bar();
// // console.dir(bar);
// // function Parent() {
// //     this.age = 12;
// // }

// // var p = new Parent()

// // console.log(Symbol.prototype);

// // // Parent.prototype.say = function(){
// // //     console.log(123);
// // // }

// // console.log(p.__proto__);
// // console.log(Parent.prototype);

// // Parent.prototype = {
// //     say: function() {

// //     }
// // }

// // function Son() {

// // }

// // Son.prototype = new Parent()
// // Son.prototype.foo = 'hello world'

// // console.log(Son.prototype.constructor === Object);

// // Son.prototype.constructor = Son

// // var son = new Son()
// // console.log(son);
// // console.log(Parent.prototype.constructor);

// // 原型链继承
// // function SuperType() {
// //     this.property = true;
// // }
// // SuperType.prototype.getSuperValue = function () {
// //     return this.property;
// // };

// // function SubType() {
// //     this.subproperty = false;
// // }
// // // 继承自SuperType，父类的实例指向子类的原型对象
// // SubType.prototype = new SuperType();
// // // 子类的原型对象 === 父类的实例
// // // SubType.prototype.__proto__ === SuperType.prototype
// // // 子类的原型对象的隐式原型 === 父类的原型对象

// // SubType.prototype.getSubValue = function () {
// //     return this.subproperty;
// // };

// // var instance = new SubType();
// // console.log(instance)
// // console.log(instance.getSuperValue());//true

// // 构造函数继承
// // function SuperType(name) {
// //     this.name = name;
// //     this.colors = ["red", "blue", "green"];
// // }

// // function SubType(name, age) {
// //     // 继承自SuperType
// //     SuperType.call(this, name);
// //     // 可以理解为将父类构造函数内的语句移过来
// //     // this.name = name;
// //     // this.colors = ["red", "blue", "green"];

// //     this.age = age;
// // }

// // var instance1 = new SubType("Nicholas", 29);
// // instance1.colors.push("black");
// // console.log(instance1.colors);    //"red,blue,green,black"

// // var instance2 = new SubType();
// // console.log(instance2.colors);    //"red,blue,green"

// // console.log(instance1.name); // "Nicholas"
// // console.log(instance1.age); // 29

// // 组合继承

// // function SuperType(name) {
// //     this.name = name;
// //     this.colors = ["red", "blue", "green"];
// // }
// // SuperType.prototype.sayName = function () {
// //     console.log(this.name);
// // };

// // function SubType(name, age) {
// //     //继承属性
// //     SuperType.call(this, name);
// //     this.age = age;
// // }

// // // 继承方法
// // SubType.prototype = new SuperType();
// // SubType.prototype.constructor = SubType;
// // SubType.prototype.sayAge = function () {
// //     console.log(this.age);
// // };

// // var instance1 = new SubType("Nicholas", 29);
// // instance1.colors.push("black");
// // console.log(instance1.colors); //"red,blue,green,black"
// // instance1.sayName(); //"Nicholas";
// // instance1.sayAge(); //29

// // var instance2 = new SubType("Greg", 27);
// // console.log(instance2.colors); //"red,blue,green"
// // instance2.sayName(); //"Greg";
// // instance2.sayAge(); //27

// // 原型式继承

// function object(obj) {
//     function F() { }
//     F.prototype = obj;
//     return new F();
// }

// var person = {
//     name: "Nicholas",
//     friends: ["Shelby", "Court", "Van"]
// };

// var anotherPerson = object(person);
// console.log(anotherPerson);

// anotherPerson.name = "Greg";
// anotherPerson.friends.push("Rob");

// console.log(anotherPerson);

// var yetAnotherPerson = object(person);
// yetAnotherPerson.name = "Linda";
// yetAnotherPerson.friends.push("Barbie");
// console.log(yetAnotherPerson);

// console.log(person.friends);

//  寄生式继承

// function createAnother(original) {
//     var clone = object(original); // 过调用函数创建一个新对象
//     clone.sayHi = function() {
//         // 以某种方式增强这个对象
//         console.log("hi");
//     };
//     return clone; // 返回对象
// }

// var person = {
//     name: "Nicholas",
//     friends: ["Shelby", "Court", "Van"]
// };
// var anotherPerson = createAnother(person);
// anotherPerson.sayHi(); //"hi"

// 寄生组合式继承

function inheritPrototype(subType, superType){
    var prototype = Object.create(superType.prototype); //创建对象
    prototype.constructor = subType;                    // 增强对象
    subType.prototype = prototype;                      // 指定对象
  }
  
  // 父类初始化实例属性和原型属性
  function SuperType(name){
    this.name = name;
    this.colors = ["red", "blue", "green"];
  }
  SuperType.prototype.sayName = function(){
    alert(this.name);
  };
  
  // 借用构造函数传递增强子类实例属性（支持传参和避免篡改）
  function SubType(name, age){
    SuperType.call(this, name);
    this.age = age;
  }
  
  // 将父类原型指向子类
  inheritPrototype(SubType, SuperType);
  
  // 新增子类原型属性
  SubType.prototype.sayAge = function(){
    alert(this.age);
  }
  
  var instance1 = new SubType("xyc", 23);
  var instance2 = new SubType("lxy", 23);
  
  instance1.colors.push("2"); // ["red", "blue", "green", "2"]
  instance1.colors.push("3"); // ["red", "blue", "green", "3"]
