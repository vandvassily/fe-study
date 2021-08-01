// 原型链继承
; (function () {
    return
    function Person(name) {
        this.name = name
    }

    Person.prototype.say = function () {
        console.log(`his name is ${this.name}`)
    }

    function Student(name, age) {
        this.name = name
        this.age = age
    }

    Student.prototype = new Person()
    Student.prototype.constructor = Student

    Student.prototype.saySon = function () {
        console.log(`his name is saySon`)
    }

    var student = new Student('lily', 19)
    console.log(student);

})()

    // 借用构造函数继承
    ; (function () {

        return
        function Person(name) {
            this.name = name
        }

        Person.prototype.say = function () {
            console.log(`his name is ${this.name}`)
        }

        function Student(name, age) {
            Person.call(this, name)
            this.age = age
        }

        Student.prototype.saySon = function () {
            console.log(`his name is saySon`)
        }

        var student = new Student('lily', 19)
        console.log(student);

    })()

    // 组合继承
    // 原型链 + 借用构造函数继承
    ; (function () {

        return
        function Person(name) {
            this.name = name
        }

        Person.prototype.say = function () {
            console.log(`his name is ${this.name}`)
        }

        function Student(name, age) {
            Person.call(this, name)
            this.age = age
        }
        Student.prototype = new Person();
        Student.prototype.constructor = Student

        Student.prototype.saySon = function () {
            console.log(`his name is saySon`)
        }

        var student = new Student('lily', 19)
        console.log(student);

    })()

    // 原型式继承
    ; (function () {

        return
        function object(obj) {
            function F() { }
            F.prototype = obj;
            return new F()
        }

        var person = {
            name: '呵呵',
            say: function () {
                console.log(`his name is ${this.name}`)
            }
        }

        var student = object(person)
        console.log(student);
        student.say()

    })()

    // 寄生式继承
    ; (function () {
        return;
        function object(obj) {
            function F() { }
            F.prototype = obj;
            return new F()
        }

        var person = {
            name: '呵呵',
            say: function () {
                console.log(`his name is ${this.name}`)
            }
        }


        function createAnother(obj) {
            var instance = object(obj)
            instance.saySon = function () {
                console.log(`saySon`)
            }
            return instance
        }

        var student = createAnother(person)
        console.log(student);
        student.say()
        student.saySon()

    })()

    // 寄生式继承
    ; (function () {
        return
        function object(obj) {
            function F() { }
            F.prototype = obj;
            return new F()
        }
        function inherit(SubType, SuperType) {
            var prototype = object(SuperType.prototype)
            SubType.prototype = prototype
            SubType.prototype.constructor = SubType
        }

        function Person(name) {
            this.name = name
        }

        Person.prototype.say = function () {
            console.log(`his name is ${this.name}`)
        }

        function Son(name, age) {
            Person.call(this, name)
            this.age = age
        }

        inherit(Son, Person)

        Son.prototype.saySon = function () {
            console.log(`his name is saySon`)
        }

        var student = new Son('lily', 19)
        console.log(student);
        student.say()


    })()


    ; (function () {

        var person = {
            name: 'lily',
            say: function (a, b, c) {
                console.log(`his name is ${this.name}`)
                console.log(`a: ${a} b: ${b} c: ${c} `)
            }
        }
        person.name
        person.say()
        var another = {
            name: 'lucy'
        }
        person.say.call(another, 1, 2, 3)
        Function.prototype.call2 = function (context) {
            context.fn = this
            var arr = []
            for (var index = 1; index < arguments.length; index++) {
                arr.push(arguments[index])
            }

            console.log(arr);

            var result = eval('context.fn(' + arr + ')')

            delete context['fn']
            return result
        }
        Function.prototype.apply2 = function (context) {
            context.fn = this
            var arr = arguments[1]

            var result = eval('context.fn(' + arr + ')')

            delete context['fn']
            return result
        }
        person.say.call2(another, 1, 2, 3)
        person.say.apply2(another, [1, 2, 3])
        console.log(another)

    })()