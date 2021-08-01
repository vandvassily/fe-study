// 实现new

function Otaku(name, age) {
    this.name = name
    this.age = age
}

Otaku.prototype.strength = 60

Otaku.prototype.sayName = function () {
    console.log('I am ' + this.name)
}

var person1 = new Otaku('xiaoming', 12)
console.log(person1)

function objectFactory() {
    // var newObj = {}

    var con = [].shift.call(arguments)
    var newObj = Object.create(con.prototype)
    // newObj.__proto__ = con.prototype
    var res = con.apply(newObj, arguments)

    return typeof res === 'object' ? res || newObj : newObj
}

var person2 = objectFactory(Otaku, 'xiaohong', 12)
console.log(person2)