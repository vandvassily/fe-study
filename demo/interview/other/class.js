// class 使用 ES5 来实现。

// ES6 class
// class SuperType {
//     static staticFn() {
//         console.log('this is SuperType static function');
//     }
//     constructor(name) {
//         this.name = name;
//     }

//     say() {
//         console.log(`this is SuperType prototype function: name is ${this.name}`);
//     }
// }

// // ES6 extends
// class SonType extends SuperType {
//     constructor(name, type) {
//         super(name);
//         this.type = type;
//     }

//     sonSay() {
//         console.log(`this is sonType prototype function: name is ${this.name}`);
//     }
// }

// ES5 class
function SuperType(name) {
    this.name = name;
}

SuperType.staticFn = function () {
    console.log('this is SuperType static function');
};

SuperType.prototype.say = function () {
    console.log(`this is SuperType prototype function: name is ${this.name}`);
};

// ES5 extends
function SonType(name, type) {
    SuperType.call(this, name);
    this.type = type;
}

// Object.create()  polyfill
function object(prototype) {
    function F() {}
    F.prototype = prototype;

    return new F();
}

SonType.prototype = object(SuperType.prototype);
SonType.prototype.constructor = SonType;

SonType.prototype.sonSay = function () {
    console.log(`this is sonType prototype function: name is ${this.name}`);
};

var sup = new SuperType('super');
console.log(sup);
SuperType.staticFn();
console.log(sup.name);
sup.say();

var sonType = new SonType('son', 'sonType');
console.log(sonType);
