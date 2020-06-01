# 数组扁平化

## 扁平化

数组的扁平化，就是将一个嵌套多层的数组 array (嵌套可以是任何层数)转换为只有一层的数组。

```javascript
var arr = [1, [2, [3, 4]]];
console.log(flatten(arr)) // [1, 2, 3, 4]
```

## 递归

```javascript
var arr = [1, [1, 2], [1, 2, 3], [1, 2, [1, 2]]]
function flatten(arr) {
    var res = [];
    arr.forEach(element => {
        if (Array.isArray(element)) {
            res = res.concat(flatten(element))
        }
        else {
            res.push(element)
        }
    });
    return res
}
console.log(flatten(arr))
```

## reduce

```javascript
function flatten2(arr) {
    return arr.reduce(function (acc, current) {
        return acc.concat(Array.isArray(current) ? flatten2(current) : current)
    }, [])
}
console.log(flatten2(arr))
```

## ... 扩展运算符

```javascript

function flatten3(arr = []) {
    while (arr.some(item => {
        return Array.isArray(item)
    })) {
        arr = [].concat(...arr)
    }
    return arr
}
console.log(flatten3(arr));
```

## 骚操作

只能用来处理一层

```javascript
var flatten4 = Function.apply.bind([].concat, [10])
var flatter5 = function(arg){
    return [].concat(...arg)
}
var flatten6 = function (arg) {
    return [].concat.call([], ...arg)
}
console.log(flatten4(arr));
console.log(flatter5(arr));
console.log(flatten6(arr));
```

## 参考资料

[JavaScript专题之数组扁平化](https://github.com/mqyqingfeng/Blog/issues/36)
