# npm link

在本地开发模块的时候，可以使用 `npm link` 命令，将模块与项目中的模块软连接，方便对模块进行开发和调试

## 使用

### 创建链接

在模块目录，执行 `npm link` ，npm 会根据模块中 `package.json` 配置的信息，链接到全局

```shell
# bash
cd module-A
npm link
```

```js
// module-A/index.js 中内容
export function foo() {
    console.log('this is from module-A');
}
```

### 项目中使用

在项目目录，执行 `npm link XXX`，`XXX` 会被链接到项目 `node_modules` 中。

```bash
# bash
cd project-dev
npm link module-A
```

```js
// project-dev/main.js
import { foo } from 'module-A';

foo()
```

大功告成。

## 参考

[npm link的使用](https://www.jianshu.com/p/aaa7db89a5b2)