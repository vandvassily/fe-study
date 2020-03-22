# this

## 五种绑定方式

- 默认绑定
- 隐式绑定
- 显式绑定
- new 绑定
- 箭头函数绑定

## 总结

- this 永远指向最后调用它的那个对象
- 匿名函数的this永远指向window
- 使用.call()或者.apply()的函数是会直接执行的
- bind()是创建一个新的函数，需要手动调用才会执行
- 如果call、apply、bind接收到的第一个参数是空或者null、undefined的话，则会忽略这个参数
- forEach、map、filter函数的第二个参数也是能显式绑定this的

## 相关推荐
[【建议👍】再来40道this面试题酸爽继续(1.2w字用手整理)](https://juejin.im/post/5e6358256fb9a07cd80f2e70)