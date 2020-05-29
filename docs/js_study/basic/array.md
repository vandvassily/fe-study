# 数组方法

## Array.from()

:::tip
Array.from(arrayLike[, mapFn[, thisArg]])
:::

从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。

```javascript
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

```

## Array.prototype.every()

测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。

```javascript
console.log(arr.every(function(element, index){
    return element > 0
}))
// true
console.log(arr.every(function(element, index){
    return element > 5
}))
// false
```

## Array.prototype.filter()

创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。

```javascript
console.log(arr.filter(function (element, index) {
    return element == 1
}))
// [1, "1", "1"]
console.log(arr.filter(function (element, index) {
    return element === 1
}))
// [1]
```

## Array.prototype.flat()

:::tip
兼容问题
ECMAScript2019
:::

会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

```javascript
// ECMAScript 2019
var flatArr = [1, [1,2], [1,2,3,4],[2,3,4,5,6],[1,[2,3],[5],[1,[2,3]]]];
console.log(flatArr.flat(1))
// [1, 1, 2, 1, 2, 3, 4, 2, 3, 4, 5, 6, 1, Array(2), Array(1), Array(2)]
console.log(flatArr.flat(2))
// [1, 1, 2, 1, 2, 3, 4, 2, 3, 4, 5, 6, 1, 2, 3, 5, 1, Array(2)]
console.log(flatArr.flat(Infinity))
// [1, 1, 2, 1, 2, 3, 4, 2, 3, 4, 5, 6, 1, 2, 3, 5, 1, 2, 3]
```

## Array.prototype.forEach()

对数组的每个元素执行一次给定的函数。

```javascript
arr.forEach(function(element, index){
    console.log(element);
})
```

## Array.prototype.includes()

用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。

```javascript
console.log(arr.includes(1));
console.log(arr.includes('1'));
```

## Array.prototype.indexOf()

返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。

```javascript
console.log(arr.includes(1));
console.log(arr.indexOf('1'));

var obj1 = { a: 1 };
var arr2 = ['3', 2, 4, obj1];
console.log(arr2.indexOf(obj1));
```

## Array.prototype.reduce()

对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。

## 参考

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)