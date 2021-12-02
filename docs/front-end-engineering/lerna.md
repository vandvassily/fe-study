# 基于 Lerna 管理 monorepo 项目

demo传送门: [lerna-example](https://github.com/vandvassily/lerna-example)

## monorepo 与 multirepo

Monorepo 的全称是 monolithic repository，即单体式仓库，与之对应的是 Multirepo(multiple repository)，这里的“单”和“多”是指每个仓库中所管理的模块数量。

Monorepo 是把所有相关的 package 都放在一个仓库里进行管理，每个 package 独立发布。例如：React, Angular, Babel, Jest, Umijs, Vue ...

Multirepo 是比较传统的做法，即每一个 package 都单独用一个仓库来进行管理。例如：Rollup, ...

## Lerna

Lerna 是一个管理多个 npm 模块的工具，是 Babel 自己用来维护自己的 Monorepo 并开源出的一个项目。优化维护多包的工作流，解决多个包互相依赖，且发布需要手动维护多个包的问题。

Lerna 使用 git 和 npm 管理多软件包代码仓库的工作流程进行优化。

### 安装

```bash
$ npm i -g lerna
```

### 初始化lerna项目

```bash
# --independent 独立版本号
$ lerna init --independent
```

### 更改为 yarn worksapces

目的是将所有子包的 `node_modules` 统一提升到 lerna 项目根目录下

```json
// ./lerna.json
{
  ...
  "npmClient": "yarn",
  "useWorkspaces": true
}
```

```json
// ./package.json
{
  "private": true,
  ...
  "workspaces": ["packages/*"]
}
```

### 创建package

```bash
$ lerna create package-A
$ lerna create package-B
```

### 添加依赖

```bash
# package-B 依赖于 package-A
$ lerna add package-A --scope=package-B
```

### 安装包

```bash
# 根目录下
$ yarn install
```

### 启动项目

```bash
# 命令可以写在根目录下 package.json 中的 scripts 中
$ yarn workspace module-A dev
```

### 智能提示

方便编辑器自动查找引用的依赖

```json
// jsconfig.json
{ 
  "compilerOptions": {
    ...
    "paths": {
      "@vassily/h5-utils": ["./packages/h5-utils"],
    }
  }
}
```

## 参考

[现代前端工程化-基于 Monorepo 的 lerna](https://blog.csdn.net/qiwoo_weekly/article/details/115364654) 

[每个前端都值得拥有自己的组件库，就像每个夏天都拥有西瓜](https://blog.csdn.net/xgangzai/article/details/119524117)

[基于 lerna 的多包 JavaScript 项目搭建维护笔记](https://youngjuning.js.org/#/blog/others/%E5%9F%BA%E4%BA%8E%20lerna%20%E7%9A%84%E5%A4%9A%E5%8C%85%20java-script%20%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA)

[基于 Lerna 管理 packages 的 Monorepo 项目最佳实践](https://juejin.cn/post/6844903911095025678)