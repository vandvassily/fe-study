class Person {
  constructor(name, sex) {
    this.name = name
    this.sex = sex
  }

  static say() {
    console.log(`this is static say`)
  }

  sayName() {
    console.log(`my name is ${this.name}`)
  }
}

class Son extends Person {
  constructor(name, sex) {
    super(name, sex)
  }

  schoolYear = 0

  sonSayName() {
    console.log(`son say his name is ${this.name}`)
  }
}

let son = new Son('xiaoming', '16')
console.log(son)

console.log(son.__proto__.constructor === Son)
console.log(Son.__proto__ === Person)
console.dir(Son)
console.log(Son.prototype.constructor === Son)
console.log(Son.prototype.__proto__.constructor === Person)
console.log(Son instanceof Person)

// ES5 寄生组合继承

function Parent(name) {
  console.log(name)
  this.name = name
}

Parent.prototype.sayName = function() {
  console.log(`name is ${this.name}`)
}

function Child(name, age) {
  Parent.call(this, name)
  this.age = age
}

Child.prototype = Object.create(Parent.prototype, {
  constructor: {
    value: Child,
    enumerable: false, // 不可枚举
    writable: true,
    configurable: true
  }
})

Child.prototype.sonSayName = function() {
  console.log(`son say his name is ${this.name}`)
}

let child = new Child('小明', 14)

console.log(child)
console.dir(Child)
console.log(Child.prototype.constructor === Child)
console.log(child instanceof Child)
console.log(child instanceof Parent)

for (const name in Child.prototype) {
  console.log(name)
}

for (const name in Child.prototype) {
  if (Object.hasOwnProperty.call(Child.prototype, name)) {
    console.log(name)
  }
}