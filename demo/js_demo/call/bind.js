Function.prototype.myBind = function () {
    var slice = [].slice;
    var thatFunc = this,
        thatArg = arguments[0];
    var args = slice.call(arguments, 1);
    if (typeof thatFunc !== 'function') {
        // closest thing possible to the ECMAScript 5
        // internal IsCallable function
        throw new TypeError(
            'Function.prototype.bind - ' +
                'what is trying to be bound is not callable'
        );
    }
    function myBind() {
        var funcArgs = args.concat(slice.call(arguments));
        let isNew = this instanceof myBind;
        return thatFunc.apply(isNew ? this : thatArg, funcArgs);
    }

    myBind.prototype = Object.create(thatFunc.prototype);
    myBind.prototype.constructor = myBind;
    return myBind;
};

function Animal(name, color) {
    this.name = name;
    this.color = color;
}
Animal.prototype.say = function () {
    return `I'm a ${this.color} ${this.name}`;
};
const Cat = Animal.myBind(null, 'cat');
const cat = new Cat('white');
console.log(cat.say()); //这句代码是作者解题调试加上去的
if (
    cat.say() === "I'm a white cat" &&
    cat instanceof Cat &&
    cat instanceof Animal
) {
    console.log('success');
}
