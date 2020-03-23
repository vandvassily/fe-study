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

## 手写实现
