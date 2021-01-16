class Person {
    constructor(name) {
        this.name = name;
    }
    state = 1;
    _sex = '女';

    static say() {
        console.log(`this is say`);
    }

    get sex() {
        return this._sex;
    }

    set sex(newSex) {
        this._sex = newSex;
    }
}

Object.defineProperty(Person.prototype, 'age', {
    enumerable: true,
    configurable: true,
    get() {
        return this._age;
    },
    set(newAge) {
        this._age = newAge;
    }
});

let xiaoming = new Person('xiaoming');
console.log(xiaoming);
