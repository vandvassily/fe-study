class Person {
  constructor(name) {
    this.name = name
  }

  age = '12'

  gender = ''

  _name = ''

  get name() {
    return this._name
  }

  set name(newName) {
    this._name = newName
    console.log(`new name is : ${newName}`)
  }

  sayName() {
    console.log(this.name)
  }

  static say() {
    console.log(`say`)
  }
}

let person = new Person('小明')

function Parent(name) {
  this.name = name
}

Parent.prototype.getName = function() {
  console.log(this.name)
}

function Child(name, age) {
  Parent.call(this, name)
  this.age = age
}

Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child

var child1 = new Child('kevin', '18')

console.log(child1)
