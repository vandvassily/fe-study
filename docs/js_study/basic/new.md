# new 的原理

- 1. 创建一个空对象
- 2. 将创建的对象的隐式原型指向其构造函数的显示原型
- 3. 使用call或者apply改变其构造函数的this指向
- 4. 如果无返回值或者返回一个非对象值，则将obj返回作为新对象；如果返回值是一个对象的话，则直接返回此对象

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