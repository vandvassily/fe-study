# new 的原理

## new的原理

- 创建一个空对象
- 将创建的对象的隐式原型指向其构造函数的显示原型
- 使用call或者apply改变其构造函数的this指向
- 如果无返回值或者返回一个非对象值，则将obj返回作为新对象；如果返回值是一个对象的话，则直接返回此对象

伪代码表示：

``` javascript
var a = new myFunction("name");

new myFunction{
    var obj = {};
    obj.__proto__ = myFunction.prototype;
    var result = myFunction.call(obj,"name");
    return typeof result === 'obj'? result : obj;
}

```

## 手写一个new的实现

```javascript
function create() {
    // 创建一个空的对象
    var obj = new Object();
    // 获得构造函数，arguments中去除第一个参数
    var Con = [].shift.call(arguments);
    // var Con = Array.prototype.shift.call(arguments)
    // 链接到原型，obj 可以访问到构造函数原型中的属性
    obj.__proto__ = Con.prototype;
    // 绑定 this 实现继承，obj 可以访问到构造函数中的属性
    var ret = Con.apply(obj, arguments);
    // 优先返回构造函数返回的对象
    return ret instanceof Object ? ret : obj;
};
```
