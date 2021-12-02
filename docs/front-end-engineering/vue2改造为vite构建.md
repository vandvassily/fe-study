# vue2项目进行vite改造

因为vue3 + vite 改动太多，暂时还是不要对 `vue2` 项目进行升级改造

如果想改造，可以尝试 开发环境使用 vite + vue2，生产环境使用 webpack + vue2

## 改造遇到的坑

### 1. process is not define

源码内所有 **process.env.xxxx** 改为从 **import.meta.env** 中获取

配置文件 `.env.XXX` 中，变量名称需以 `VITE_APP` 开头，例如 `VITE_APP_API_URL`

### 2. 组件按需引入

需要在 `vite.config.js` 中使用插件 `vite-plugin-imp`

例如引入 `vant` 组件

```js
import { createVuePlugin } from 'vite-plugin-vue2';
import { defineConfig } from 'vite';
import path from 'path';
import vitePluginImp from 'vite-plugin-imp';

export default defineConfig({
  plugins: [
    ...
    vitePluginImp({
      libList: [
        {
          libName: 'vant',
          style(name) {
            if (/CompWithoutStyleFile/i.test(name)) {
              // This will not import any style file
              return false;
            }
            return `vant/es/${name}/style/index.js`;
          }
        }
      ]
    })
  ],
```
