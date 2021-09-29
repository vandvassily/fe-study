# vconsole不同环境打包引入

`vconsole` 作为移动端调试开发利器。最理想的情况就是测试环境引入并启用，开发环境不引入。
如果直接使用 `import VConsole from 'vconsole'` 则会直接引入并打包，额外增加包体的大小。
我们可以通过使用webpack插件 `vconsole-webpack-plugin` 来处理不同环境下的引入问题

## vue-cli版

### 添加依赖

```bash
yarn add -D vconsole-webpack-plugin
```

### 修改配置

```js
// vue.config.js
const vConsolePlugin = require('vconsole-webpack-plugin');

module.exports = {
    // ...
    configureWebpack: (config) => {
        //生产环境去掉vconsole调试器
        let pluginsDev = [
            new vConsolePlugin({
                filter: [],
                enable: process.env.NODE_ENV !== 'production'
            })
        ];

        config.plugins = [...config.plugins, ...pluginsDev];
	},
    // ...
}
```

## 插件文档

[vconsole-webpack-plugin](https://github.com/diamont1001/vconsole-webpack-plugin)
