# call apply bind

## 原理

`call()` 方法使用一个指定的 `this` 值和单独给出的一个或多个参数来调用一个函数。

`apply()` 方法使用一个指定的 `this` 值和单独给出的一个包含多个参数的数组来调用一个函数。

`bind()` 方法创建一个新的函数，在 `bind()` 被调用时，这个新函数的 `this` 被指定为 `bind()` 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

例子

```javascript
var func = function(arg1, arg2) {
     ...
};

func.call(this, arg1, arg2); // 使用 call，参数列表
func.apply(this, [arg1, arg2]) // 使用 apply，参数数组

```

:::tip
注意：
`call` 和 `apply` 调用的时候会执行，`bind()`只绑定 `this`，下一次调用才执行
:::

## 使用场景

### 1. 合并两个数组

### 2. 获取数组中的最大值和最小值

### 3. 验证是否是数组

### 4. 类数组对象（Array-like Object）使用数组方法

### 5. 调用父构造函数实现继承


## 手写实现

### call

```javascript
// 第三版
Function.prototype.call2 = function (context) {
    var context = context || window;
    context.fn = this;

    var args = [];
    for(var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }

    var result = eval('context.fn(' + args +')');

    delete context.fn
    return result;
}

// 测试一下
var value = 2;

var obj = {
    value: 1
}

function bar(name, age) {
    console.log(this.value);
    return {
        value: this.value,
        name: name,
        age: age
    }
}

bar.call2(null); // 2

console.log(bar.call2(obj, 'kevin', 18));
```

### apply

```javascript
Function.prototype.apply = function (context, arr) {
    var context = Object(context) || window;
    context.fn = this;

    var result;
    if (!arr) {
        result = context.fn();
    }
    else {
        var args = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            args.push('arr[' + i + ']');
        }
        result = eval('context.fn(' + args + ')')
    }

    delete context.fn
    return result;
}
```

### bind


## 参考

[深度解析 call 和 apply 原理、使用场景及实现](https://muyiy.cn/blog/3/3.3.html#%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF)
