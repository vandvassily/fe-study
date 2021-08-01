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
console.log('Array.prototype.entries()');
var entries = arr.entries()
console.log(entries);
console.log(entries.next().value);
console.log(entries.next().value);
console.log(entries.next().value);

// Array.prototype.every()
console.log(arr.every(function (element, index) {
    return element > 0
}))
// true
console.log(arr.every(function (element, index) {
    return element > 5
}))
// false

// Array.prototype.some()
console.log('Array.prototype.some');
console.log(arr.some(function (element, index) {
    return element > 2
}))
// true
console.log(arr.some(function (element, index) {
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

// Array.prototype.keys()
var iterator = arr.keys()
console.log(iterator);
console.log(iterator.next());
console.log([...iterator]);
console.log(iterator.next());
console.log([...iterator]);

// Array.prototype.map()
var newArr = arr.map(function (element, index) {
    return element * 2
})
console.log(newArr);
// [2, 4, 6, 8, 2, 4, 2, 6]

// Array.prototype.splice()
console.log(arr);
arr.splice(3, 0, 5)
console.log(arr)

arr.splice(3, 2, 5, 6, 7, 8)
console.log(arr)
var copyArr = arr.slice()
arr.splice(3, 20)
copyArr.splice(3)
console.log(arr)
console.log(copyArr)

// Array.prototype.reverse()
var arr3 = [1, 2, 3, 4, 5, { a: 1 }, { b: 2 }, 'd', 'c', 'e']
console.log(arr3);
arr3.reverse()
console.log(arr3)

// Array.prototype.sort()
var arr4 = [1, 3, 2, 6, 5, 'c', 'd', 'e', 'a', 'A']
console.log(arr3.sort());
console.log(arr4.sort());
// 随机打乱
console.log(arr4.sort(function (a, b) {
    return Math.random() - 0.5
}))
console.log('A' > 'a')

// Array.prototype.toString()
console.log(arr4.toString())
console.log(arr3.toString())

// Array.prototype.reduce()
var arrReduce = [1, 2, 3, 4, 5];
var count = 0;
var reducer = function (accumulator, currentValue, index, array) {
    count++;
    return accumulator + currentValue;
}
console.log(arrReduce.reduce(reducer))
console.log(count)
count = 0;
console.log(arrReduce.reduce(reducer, 0))
console.log(count)


