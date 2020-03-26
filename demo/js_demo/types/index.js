console.log(typeof 123)
console.log(typeof 'abc')
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null)
console.log(typeof [])
console.log(typeof function c(){})
console.log(typeof {a: 1})
console.log(typeof Symbol(123))

var name1 = Symbol();

var obj1 = {
    [name1]: "Alice"
};
var obj2 = {
    name1: "Bruce"
};
// console.log(obj1.name1); // 输出：undefined
// console.log(obj1[name1]); // 输出：Alice
// console.log(obj2.name1); // 输出：Bruce
// console.log(obj2[name1]); // 输出：undefined

console.log(Object.prototype.toString.call(123))
console.log(Object.prototype.toString.call('ab'))
console.log(Object.prototype.toString.call(true))
console.log(Object.prototype.toString.call(undefined))
console.log(Object.prototype.toString.call(null))
console.log(Object.prototype.toString.call(Symbol()))
console.log(Object.prototype.toString.call(function(){}))
console.log(Object.prototype.toString.call([]))
console.log(Object.prototype.toString.call({}))


function isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]'
}




