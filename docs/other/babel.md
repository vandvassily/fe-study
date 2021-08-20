# babel

## 核心步骤

1. 解析 parse  `babel-parser`
2. 转换 transform
3. 生成 generate

### 解析

接收源码，解析源码，并生成 `AST` 

### 转换

接收 `AST` ，并对其进行遍历，在此过程中对节点进行添加、更新及移除等操作。这是 Babel 或是其他编译器中最复杂的过程，同时也是插件将要介入工作的部分

### 生成

接收转换后的 `AST` ，转换成字符串形式的代码，同时还会创建源码映射（source maps）
代码生成其实很简单：深度优先遍历整个 AST，然后构建可以表示转换后代码的字符串。

## 目标：写一个按需引入插件

例如按需引入lodash的方法

```js
import {add, cloneDeep} from 'lodash'
// import add from 'lodash/add'
// import cloneDeep from 'lodash/cloneDeep'
```

### 思路

1. `babel-parser` 解析代码，生成 `AST`
2. 通过 `babel-traverse` 遍历语法树
3. 找到相应的组件库名称，使用 `babel-types` 操作 `AST` 节点

## 如何写一个插件？

[babel plugin-handbook](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md)
[AST，真香](https://mp.weixin.qq.com/s/4IyGKkJzi1HpLqMlqBjD9g)
