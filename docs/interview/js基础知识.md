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

## 4. && 、 ||和!! 运算符分别能做什么

* && 叫逻辑与，在其操作数中找到第一个虚值表达式并返回它，如果没有找到任何虚值表达式，则返回最后一个真值表达式。它采用短路来防止不必要的工作。
* || 叫逻辑或，在其操作数中找到第一个真值表达式并返回它。这也使用了短路来防止不必要的工作。在支持 ES6 默认函数参数之前，它用于初始化函数中的默认参数值。
* !! 运算符可以将右侧的值强制转换为布尔值，这也是将值转换为布尔值的一种简单方法。

## 5. JS中数据类型的判断（ typeof，instanceof，constructor，Object.prototype.toString.call())

## 6. 介绍 js 有哪些内置对象？

## 7. undefined 与 undeclared 的区别？

`undefined` 属于已定义但是未赋值的变量；可以使用 `typeof` 去判断

undeclared 其实就是 `xxx is not defined` ，属于在作用域中没有声明过的变量；也可以使用 `typeof` 去判断

## 8. null 和 undefined 的区别？

两者都是基本数据类型；分别只有一个值，`null` 和 `undefined`
`undefined` 代表的是变量已声明，但未赋值
`null` 代表的是空对象

typeof 判断 `null` 会返回 `object`，这是历史悠久的bug

## 9. {}和[]的valueOf和toString的结果是什么？

    {} 的 valueOf 结果为 {} ，toString 的结果为 "[object Object]"

    [] 的 valueOf 结果为 [] ，toString 的结果为 ""

## 10. Javascript 的作用域和作用域链

作用域： 作用域是定义变量的区域，它有一套访问变量的规则，这套规则来管理浏览器引擎如何在当前作用域以及嵌套的作用域中根据变量（标识符）进行变量查找。
作用域链： 作用域链的作用是保证对执行环境有权访问的所有变量和函数的有序访问，通过作用域链，我们可以访问到外层环境的变量和
函数。

## 11. javascript 创建对象的几种方式？

红宝书中有详细描述

我们一般使用字面量的形式直接创建对象，但是这种创建方式对于创建大量相似对象的时候，会产生大量的重复代码。但 js
和一般的面向对象的语言不同，在 ES6 之前它没有类的概念。但是我们可以使用函数来进行模拟，从而产生出可复用的对象
创建方式，我了解到的方式有这么几种：

    （1）第一种是工厂模式，工厂模式的主要工作原理是用函数来封装创建对象的细节，从而通过调用函数来达到复用的目的。但是它有一个很大的问题就是创建出来的对象无法和某个类型联系起来，它只是简单的封装了复用代码，而没有建立起对象和类型间的关系。

    （2）第二种是构造函数模式。js 中每一个函数都可以作为构造函数，只要一个函数是通过 new 来调用的，那么我们就可以把它称为构造函数。执行构造函数首先会创建一个对象，然后将对象的原型指向构造函数的 prototype 属性，然后将执行上下文中的 this 指向这个对象，最后再执行整个函数，如果返回值不是对象，则返回新建的对象。因为 this 的值指向了新建的对象，因此我们可以使用 this 给对象赋值。构造函数模式相对于工厂模式的优点是，所创建的对象和构造函数建立起了联系，因此我们可以通过原型来识别对象的类型。但是构造函数存在一个缺点就是，造成了不必要的函数对象的创建，因为在 js 中函数也是一个对象，因此如果对象属性中如果包含函数的话，那么每次我们都会新建一个函数对象，浪费了不必要的内存空间，因为函数是所有的实例都可以通用的。

    （3）第三种模式是原型模式，因为每一个函数都有一个 prototype 属性，这个属性是一个对象，它包含了通过构造函数创建的所有实例都能共享的属性和方法。因此我们可以使用原型对象来添加公用属性和方法，从而实现代码的复用。这种方式相对于构造函数模式来说，解决了函数对象的复用问题。但是这种模式也存在一些问题，一个是没有办法通过传入参数来初始化值，另一个是如果存在一个引用类型如 Array 这样的值，那么所有的实例将共享一个对象，一个实例对引用类型值的改变会影响所有的实例。

    （4）第四种模式是组合使用构造函数模式和原型模式，这是创建自定义类型的最常见方式。因为构造函数模式和原型模式分开使用都存在一些问题，因此我们可以组合使用这两种模式，通过构造函数来初始化对象的属性，通过原型对象来实现函数方法的复用。这种方法很好的解决了两种模式单独使用时的缺点，但是有一点不足的就是，因为使用了两种不同的模式，所以对于代码的封装性不够好。

    （5）第五种模式是动态原型模式，这一种模式将原型方法赋值的创建过程移动到了构造函数的内部，通过对属性是否存在的判断，可以实现仅在第一次调用函数时对原型对象赋值一次的效果。这一种方式很好地对上面的混合模式进行了封装。

    （6）第六种模式是寄生构造函数模式，这一种模式和工厂模式的实现基本相同，我对这个模式的理解是，它主要是基于一个已有的类型，在实例化时对实例化的对象进行扩展。这样既不用修改原来的构造函数，也达到了扩展对象的目的。它的一个缺点和工厂模式一样，无法实现对象的识别。

## 12. JavaScript 继承的几种实现方式？

    构造函数继承
    原型继承
    原型链继承
    组合继承
    寄生继承
    寄生组合继承
    ES6的class继承

## 13. 寄生式组合继承的实现？

    ```js
    function Parent(name) {
        this.name = name
    }

    Parent.prototype.say = function() {
        console.log(this.name)
    }

    function Son(name, age = 12) {
        Parent.call(this, name);
        this.age = age
    }

    Son.prototype = Object.create(Parent.prototype)
    Son.prototype.constructor = Son

    Son.prototype.getName = function() {
        console.log(this.name + 'from Son prototype')
    }

    var son = new Son('xiaoming', 11)
    ```

## 14. 谈谈你对this、call、apply和bind的理解

    在浏览器里，在全局范围内this 指向window对象；
    在函数中，this永远指向最后调用他的那个对象；
    构造函数中，this指向new出来的那个新的对象；
    call、apply、bind中的this被强绑定在指定的那个对象上；
    箭头函数中this比较特殊,箭头函数this为父作用域的this，不是调用时的this.要知道前四种方式,都是调用时确定,也就是动态的,而箭头函数的this指向是静态的,声明的时候就确定了下来；
    apply、call、bind都是js给函数内置的一些API，调用他们可以为函数指定this的执行,同时也可以传参。

## 15. JavaScript 原型，原型链？ 有什么特点？

每个函数都会创建一个 `prototype` 的属性，这个属性是一个对象。这个对象就是通过调用构造函数创建的对象的原型。
使用原型的好处是，在它上面定义的属性和方法，可以被所有对象实例共享

每个构造函数都有一个原型对象，原型有一个属性指向构造函数，而实例有一个内部指针指向原型。
如果原型式另一个类型的实例？那就意味着这个原型本身有一个内部指针指向另一个原型，相应的另一个原型也有一个指针指向另一个原型。这样就在实例和原型之间构造了一条原型链

    ```js
    function Parent(){}
    let instance = new Parent();

    console.log(instance.__proto__ === Parent.prototype)
    console.log(instance.__proto__.__proto__ === Parent.prototype.__proto__)
    console.log(instance.__proto__.__proto__ === Object.prototype)
    console.log(instance.__proto__.__proto__.__proto__ === null)
    ```

## 16. js 获取原型的方法？

    ```js
    function Parent(){}

    let instance = new Parent();

    console.log(instance.__proto__)
    console.log(Object.getPrototypeOf(instance))
    console.log(Parent.prototype)
    ```

## 17. 什么是闭包，为什么要用它？

闭包就是有权访问另外一个函数的变量

闭包的用途

    闭包的第一个用途是使我们在函数外部能够访问到函数内部的变量。通过使用闭包，我们可以通过在外部调用闭包函数，从而在外部访问到函数内部的变量，可以使用这种方法来创建私有变量。
    函数的另一个用途是使已经运行结束的函数上下文中的变量对象继续留在内存中，因为闭包函数保留了这个变量对象的引用，所以这个变量对象不会被回收。

其实闭包的本质就是作用域链的一个特殊的应用

## 18. 什么是 DOM 和 BOM？

// TODO

## 19. 三种事件模型是什么？

// TODO

## 20. 事件委托是什么？

事件委托的本质是利用了浏览器事件冒泡的机制。因为事件在冒泡过程中会上传到父节点，并且父节点可以通过事件对象获取到 目标节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件，这种方式称为事件代理。

使用事件代理我们可以不必要为每一个子元素都绑定一个监听事件，这样减少了内存上的消耗。并且使用事件代理我们还可以实现事件的动态绑定，比如说新增了一个子节点，我们并不需要单独地为它添加一个监听事件，它所发生的事件会交给父元素中的监听函数来处理。

## 21. 什么是事件传播?

事件传播有三个阶段

    捕获
    目标
    冒泡

## 22. 什么是事件捕获？什么是事件冒泡？

addEventListener方法具有第三个可选参数useCapture，其默认值为false，事件将在冒泡阶段中发生，如果为true，则事件将在捕获阶段中发生。

例如click事件
事件捕获：从上到下
事件冒泡：从下到上

    window -> document -> html -> body -> div
    window <- document <- html <- body <- div

## 23. DOM 操作——怎样添加、移除、移动、复制、创建和查找节点？

// TODO:
