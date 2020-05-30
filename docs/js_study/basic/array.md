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

## Array.prototype.some()

测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值。

```javascript
console.log('Array.prototype.some');
console.log(arr.some(function (element, index) {
    return element > 2
}))
// true
console.log(arr.some(function (element, index) {
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

## Array.prototype.keys()

方法返回一个包含数组中每个索引键的Array Iterator对象。

```javascript
var iterator = arr.keys()
console.log(iterator);
console.log(iterator.next());
console.log([...iterator]);
console.log(iterator.next());
console.log([...iterator]);
```

## Array.prototype.map()

创建一个新数组，其结果是该数组中的每个元素都调用一次提供的函数后的返回值。

```javascript
var newArr = arr.map(function(element, index){
    return element * 2
})
console.log(newArr);
// [2, 4, 6, 8, 2, 4, 2, 6]
```

## Array.prototype.push() pop()  shift() unshift()

`push` 将一个或多个元素添加到数组的末尾，并返回该数组的新长度
`pop` 从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。
`shift` 从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。
`unshift` 将一个或多个元素添加到数组的开头，并返回该数组的新长度(该方法修改原有数组)。

## Array.prototype.slice()

方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。

```javascript
console.log(arr.slice(0,3))
// [1, 2, 3]
console.log(arr.slice(2,4))
// [3, 4]
console.log(arr.slice(0))
// [1, 2, 3, 4, "1", "2", "1", "3"]
```

## Array.prototype.splice()

:::tip
可以向数组中添加元素
:::

通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。

```javascript
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
```

## Array.prototype.reverse()

将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。该方法会改变原数组。

```javascript
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
```

## Array.prototype.sort()

用原地算法对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的

```javascript
var arr4 = [1,3,2,6,5,'c','d','e','a','A']
console.log(arr3.sort());
console.log(arr4.sort());
// 随机打乱
console.log(arr4.sort(function(a,b) {
    return Math.random() - 0.5
}))
console.log('A' > 'a')
```

## Array.prototype.reduce()

对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。

```javascript
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
```

## 参考

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)