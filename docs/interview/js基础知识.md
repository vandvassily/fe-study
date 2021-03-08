# JS基础知识题目

## 1. 介绍一下js的数据类型有哪些，值是如何存储的

7种基本类型

    Undefined
    Null
    Boolean
    String
    Number
    Symbol(ES6新增)
    BigInt(ES10新增)

1种引用类型

    Object，包含 Function、Array、Date

基本类型：直接存储在栈（stack）中，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储。

引用数据类型：同时存储在栈（stack）和堆（heap）中，占据空间大、大小不固定。引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。

### 参考

[「前端料包」可能是最透彻的JavaScript数据类型详解](https://juejin.cn/post/6844903990904225805)
[由浅入深，66条JavaScript面试知识点](https://juejin.cn/post/6844904200917221389)

## 2. 如何判断类型？

* undefined，typeof判断
* null，typeof判断类型为 object，同时取反为 true，则证明是null；或者 `Object.prototype.toString.call(null)`
* number，typeof判断
* string，typeof判断
* boolean，typeof判断
* bigInt，typeof判断
* symbol，typeof判断
* Object，`Object.prototype.toString.call(a)`
* Array，使用 Array.isArray 、instanceof 、`Object.prototype.toString.call([])`
* Function，typeof判断

都可以使用 `Object.prototype.toString.call()` 去判断

## 3. js的数据类型的转换

在 JS 中类型转换只有三种情况，分别是：

1. 转换为布尔值（调用Boolean()方法）
2. 转换为数字（调用Number()、parseInt()和parseFloat()方法）
3. 转换为字符串（调用.toString()或者String()方法）

    null和underfined没有.toString方法