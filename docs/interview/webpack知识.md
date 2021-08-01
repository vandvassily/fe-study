# webpack知识

## 优化建议

### 1. 缩小文件搜索范围

#### 优化loader配置

Loader 时可以通过 test 、 include 、 exclude 三个配置项来命中 Loader 要应用规则的文件。
为了尽可能少的让文件被 Loader 处理，可以通过 include 去命中只有哪些文件需要被处理

#### 优化 resolve.modules 配置

resolve.modules 的默认值是 ['node_modules']，含义是先去当前目录下的 ./node_modules 目录下去找想找的模块，如果没找到就去上一级目录 ../node_modules 中找，再没有就去 ../../node_modules 中找，以此类推，这和 Node.js 的模块寻找机制很相似。

当安装的第三方模块都放在项目根目录下的 ./node_modules 目录下时，没有必要按照默认的方式去一层层的寻找，可以指明存放第三方模块的绝对路径，以减少寻找

#### 优化 resolve.alias 配置

默认情况下 Webpack 会从入口文件 ./node_modules/react/react.js 开始递归的解析和处理依赖的几十个文件，这会时一个耗时的操作。 通过配置 resolve.alias 可以让 Webpack 在处理 React 库时，直接使用单独完整的 react.min.js 文件，从而跳过耗时的递归解析操作。

#### 优化 resolve.extensions 配置

    后缀尝试列表要尽可能的小，不要把项目中不可能存在的情况写到后缀尝试列表中。
    频率出现最高的文件后缀要优先放在最前面，以做到尽快的退出寻找过程。
    在源码中写导入语句时，要尽可能的带上后缀，从而可以避免寻找过程。例如在你确定的情况下把 require('./data') 写成 require('./data.json')。


### 2. 使用 DllPlugin

这些文件称为动态链接库，在一个动态链接库中可以包含给其他模块调用的函数和数据

原因在于包含大量复用模块的动态链接库只需要编译一次，在之后的构建过程中被动态链接库包含的模块将不会在重新编译，而是直接使用动态链接库中的代码。 由于动态链接库中大多数包含的是常用的第三方模块，例如 react、react-dom，只要不升级这些模块的版本，动态链接库就不用重新编译。

### 3. 使用 HappyPack
