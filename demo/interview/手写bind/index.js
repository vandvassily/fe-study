// call
Function.prototype.call2 = function(context, ...args) {
    context = context || window;
    context.fn = this;

    var res = context.fn(...args);
    delete context.fn;
    return res;
};
Function.prototype.apply2 = function(context, args) {
    context = context || window;
    context.fn = this;

    var res = context.fn(...args);
    delete context.fn;
    return res;
};

Function.prototype.bind2 = function(context, ...args) {
    context = context || window;
    context.fn = this;

    return function(...params) {
        var res = context.fn(...args, ...params);
        delete context.fn;
        return res;
    };
};

var arr = [1, 2, 3];
var person = {
    name: '小红',
    say: function(a, b, c) {
        console.log(this.name + `${a}:${b}:${c}`);
    },
};
console.log([].slice.call(arr));
console.log([].slice.call2(arr, 0));
console.log(person.say.call2({ name: '小兰' }));
console.log(person.say.bind2({ name: '小兰' }, 4, 5)(6));

let num2 = '2231231412.123';
console.log(num2.replace(/(\d)(?=(\d{3})+\.)/g, '$1,'));

Object.defineProperty(window, 'temp', {
    enumerable: true,
    configurable: true,
    get() {
        return 22
    },
    set() {
        throw new Errpr('错误')
    }
});

console.log(temp);
