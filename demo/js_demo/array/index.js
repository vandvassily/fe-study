// 数组方法使用

// 静态方法
// Array.from()

var a = 'foo'
console.log(Array.from(a));
// ['f', 'o', 'o']

var b = [1, 2, 3]
console.log(Array.from(b, (item) => {
    return item * 2
}))
// [2, 4, 6]

var arr = [1, 2, 3, 4, '1', '2', '1', '3']
var set = new Set(arr)
console.log(Array.from(set));
// [1, 2, 3, 4, "1", "2", "3"]

// Array.prototype.entries()
var entries = arr.entries()
console.log(entries);
console.log(entries.next().value);
console.log(entries.next().value);
console.log(entries.next().value);

// Array.prototype.every()
console.log(arr.filter(function (element, index) {
    return element > 0
}))
// true
console.log(arr.every(function (element, index) {
    return element > 5
}))
// false

// Array.prototype.filter()
console.log(arr.filter(function (element, index) {
    return element == 1
}))
// [1, "1", "1"]
console.log(arr.filter(function (element, index) {
    return element === 1
}))
// [1]

// Array.prototype.flat()
// ECMAScript 2019
var flatArr = [1, [1, 2], [1, 2, 3, 4], [2, 3, 4, 5, 6], [1, [2, 3], [5], [1, [2, 3]]]];
console.log(flatArr.flat(1))
// [1, 1, 2, 1, 2, 3, 4, 2, 3, 4, 5, 6, 1, Array(2), Array(1), Array(2)]
console.log(flatArr.flat(2))
// [1, 1, 2, 1, 2, 3, 4, 2, 3, 4, 5, 6, 1, 2, 3, 5, 1, Array(2)]
console.log(flatArr.flat(Infinity))
// [1, 1, 2, 1, 2, 3, 4, 2, 3, 4, 5, 6, 1, 2, 3, 5, 1, 2, 3]

// Array.prototype.forEach()
arr.forEach(function (element, index) {
    console.log(element);
})

// Array.prototype.includes()
console.log(arr.includes(1));
console.log(arr.includes(1));

// Array.prototype.indexOf()
console.log('Array.prototype.indexOf');
console.log(arr.includes(1));
console.log(arr.indexOf('1'));

var obj1 = { a: 1 };
var arr2 = ['3', 2, 4, obj1];
console.log(arr2.indexOf(obj1));


