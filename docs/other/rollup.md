# RollUp

`rollup` 主要用于打包类库文件，适合将多个文件合并为一个文件。同时 `tree-shaking` 会将内部没有使用到的代码移除掉。

[DEMO](https://github.com/vandvassily/rollup-demo)

## 配置

```js
// rollup.config.js
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
// import babel from 'rollup-plugin-babel';

export default {
    input: 'src/main.js',
    external: ['lodash', 'jquery'],
    output: {
        file: 'bundle.umd.js',
        name: 'Epg',
        format: 'umd',
        globals: {
            lodash: '_',
            jquery: '$'
        }
    },
    watch: {
        include: 'src/**',
        exclude: 'node_modules/**'
    },
    plugins: [
        resolve(),
        commonjs(),
        json()
        // babel({
        //     exclude: 'node_modules/**', // 防止打包node_modules下的文件
        //     runtimeHelpers: true // 使plugin-transform-runtime生效
        // })
    ]
};
```

## 插件

1. `rollup-plugin-json`
2. `rollup-plugin-node-resolve` 用于引入包的地址查找
3. `rollup-plugin-commonjs`
4. `rollup-plugin-babel` 用于ES6转ES5
