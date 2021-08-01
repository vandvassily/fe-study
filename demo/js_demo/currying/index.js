// 函数柯里化
// var person = [{ name: 'kevin' }, { name: 'daisy' }]
// var names = person.map(function (item) {
//     return item.name
// })

// console.log(names)

// 第一版

// var curry = function (fn) {
//     var args = [].slice.call(arguments, 1)
//     return function () {
//         var newArgs = args.concat([].slice.call(arguments))
//         return fn.apply(this, newArgs)
//     }
// }

// function add(a, b) {
//     return a + b;
// }

// var addCurry = curry(add, 1, 2);

// // addCurry() // 3
// // //或者
// // var addCurry = curry(add, 1);
// // addCurry(2) // 3
// // //或者
// // var addCurry = curry(add);
// // addCurry(1, 2) // 3
// console.log(curry(add, 1, 2)())
// console.log(curry(add)(1, 2))
// console.log(curry(add, 1)(2))

// 第二版
// function sub_curry(fn, a, b) {

//     var slice = Array.prototype.slice;
//     var args = slice.call(arguments, 1);
//     console.log(fn)

//     return function () {
//         console.log(args.concat(slice.call(arguments)))
//         return fn.apply(this, args.concat(slice.call(arguments)));
//     };
// }
// var count = 0;

// function curry(fn, length) {

//     length = length || fn.length;
//     count++
    
//     console.log('count: ' + count);

//     var slice = Array.prototype.slice;

//     return function () {
//         if (arguments.length < length) {
//             var combined = [fn].concat(slice.call(arguments));
//             console.log(combined);
            
//             return curry(sub_curry.apply(this, combined), length - arguments.length);
//         } else {
//             return fn.apply(this, arguments);
//         }
//     };
// }
// var fn1 = curry(function (a, b, c) {
//     return [a, b, c];
// });

// // console.log(fn("a", "b", "c")) // ["a", "b", "c"]
// // console.log(fn1("a", "b")("c")) // ["a", "b", "c"]
// console.log(fn1("a", "b")) // ["a", "b", "c"]
// // fn("a")("b")("c") // ["a", "b", "c"]
// // fn("a")("b", "c") // ["a", "b", "c"]

function sub_curry(fn) {
    return function () {
        return fn()
    }
}

function curry(fn, length) {
    length = length || 4;
    return function () {
        if (length > 1) {
            return curry(sub_curry(fn), --length)
        }
        else {
            return fn()
        }
    }
}

var fn0 = function () {
    console.log(1)
}

var fn1 = curry(fn0)

// fn1()
console.log(fn1()()());

