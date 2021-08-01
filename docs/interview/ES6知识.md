# ES6知识

## 1. Map Set WeakMap WeakSet

ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

NaN在Set中是相等的，其余判断则为 `===`

```js
// 去除数组重复成员
[...new Set(array)]
// 去除数组重复成员
Array.from(new Set(array));
// 去除字符串里面的重复字符
[...new Set('ababbc')].join('')
```

### 实例的属性和方法


```js
let set = new Set()
// 属性
set.prototype.size
// 方法
Set.prototype.add(value) // 添加某个值，返回 Set 结构本身。
Set.prototype.delete(value) // 删除某个值，返回一个布尔值，表示删除是否成功。
Set.prototype.has(value) // 返回一个布尔值，表示该值是否为Set的成员。
Set.prototype.clear() // 清除所有成员，没有返回值。
// 遍历操作
set.keys() // 返回键名的遍历器
set.values() // 返回键值的遍历器
set.entries() // 返回键值对的遍历器
set.forEach() // 使用回调函数遍历每个成员
```

#### 遍历

##### keys()，values()，entries()

keys方法、values方法、entries方法返回的都是遍历器对象（详见《Iterator 对象》一章）。由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以keys方法和values方法的行为完全一致

entries方法返回的遍历器，同时包括键名和键值，所以每次输出一个数组，它的两个成员完全相等。

##### forEach()

Set 结构的实例与数组一样，也拥有forEach方法，用于对每个成员执行某种操作，没有返回值。
