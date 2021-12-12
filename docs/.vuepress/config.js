const { path } = require('@vuepress/utils');

module.exports = {
  base: '/fe-study/',
  title: 'fe-study',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  description: '前端知识笔记',
  ga: 'UA-117533223-1',
  serviceWorker: true,
  plugins: [
    [
      '@vuepress/plugin-google-analytics',
      {
        id: 'UA-117533223-1'
      }
    ],
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components')
      }
    ]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    logo: '/img/logo.jpg',
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: true, // 文档更新时间：每个文件git最后提交的时间
    repo: 'vandvassily/fe-study',
    editLink: false,
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: 'http://vandvassily.cn/' }
    ],
    sidebar: [
      {
        text: 'JS知识',
        collapsable: false,
        link: '/javascript/',
        children: [
          '/javascript/basic/数据类型.md',
          '/javascript/basic/原型.md',
          '/javascript/basic/词法作用域.md',
          '/javascript/basic/执行上下文.md',
          '/javascript/basic/执行上下文栈.md',
          '/javascript/basic/作用域链.md',
          '/javascript/basic/this.md',
          '/javascript/basic/new.md',
          '/javascript/basic/call apply bind.md',
          '/javascript/basic/EventLoop.md',
          '/javascript/basic/array.md',
          '/javascript/basic/currying.md',
          '/javascript/basic/深拷贝.md',
          '/javascript/usage/debounce-throttle.md',
        ]
      },
      {
        text: '浏览器',
        collapsable: false,
        link: '/browser/',
        children: ['/browser/输入URL.md']
      },
      {
        text: 'Vue',
        collapsable: true,
        link: '/vue/',
        children: [
          '/vue/lifeCircle.md',
          '/vue/观察者模式.md',
          '/vue/diff.md',
          '/vue/Vue3.md',
        ]
      },
      {
        text: 'React',
        collapsable: true,
        link: '/react/',
        children: [
          '/react/React架构.md',
          '/react/jsx.md',
          '/react/lifecircle.md',
          '/react/React Hooks.md',
          '/react/react performance.md',
          '/react/setState.md',
          '/react/React Events.md',
          '/react/React 状态更新.md',
          '/react/React Scheduler.md',
          '/react/react面试题.md',
          '/react/React源码.md'
        ]
      },
      {
        text: 'Typescript',
        collapsable: true,
        link: '/typescript/',
        children: [
          '/typescript/typescript配置.md'
        ]
      },
      {
        text: '网络',
        collapsable: true,
        link: '/network/',
        children: [
          '/network/security.md',
          '/network/https.md',
        ]
      },
      {
        text: 'NodeJs',
        collapsable: true,
        link: '/nodejs/',
        children: [
          '/nodejs/tools.md'
        ]
      },
      {
        text: '数据结构与算法',
        collapsable: false,
        link: '/structure-and-algorithm/',
        children: [
          '/structure-and-algorithm/复杂度分析-上.md',
          '/structure-and-algorithm/复杂度分析-下.md',
          '/structure-and-algorithm/数组.md',
          '/structure-and-algorithm/链表.md',
          '/structure-and-algorithm/排序.md',
          '/structure-and-algorithm/二叉树的遍历.md',
          '/structure-and-algorithm/回溯算法.md',
          '/structure-and-algorithm/字符串匹配.md',
          '/structure-and-algorithm/dynamic-programming.md',
        ]
      },
      // {
      //   text: 'leetcode',
      //   collapsable: false,
      //   link: '/leetcode/',
      //   children: ['/leetcode/19.删除链表倒数第N个结点.md']
      // },
      {
        text: '性能优化',
        collapsable: true,
        link: '/performance/',
        children: [
        ]
      },
      {
        text: '前端工程化',
        collapsable: false,
        link: '/front-end-engineering/what-is-Frond-End-Engineering',
        children: [
          '/front-end-engineering/what-is-Frond-End-Engineering.md',
          '/front-end-engineering/npm link.md',
          '/front-end-engineering/babel.md',
          '/front-end-engineering/jenkins.md',
          '/front-end-engineering/rollup.md',
          '/front-end-engineering/lerna.md',
          '/front-end-engineering/vue2改造为vite构建.md',
          '/front-end-engineering/vconsole.md',
        ]
      },
      {
        text: '程序设计和场景分析',
        collapsable: false,
        link: '/programming-design/',
        children: [
          '/programming-design/how-to-make-a-game.md',
          '/programming-design/how-to-design-a-component-lib.md',
          '/programming-design/how-to-design-a-web-monitor-system.md',
        ]
      },
      {
        text: '其他',
        collapsable: false,
        link: '/other/',
        children: [
          '/other/indexedDB.md',
          '/other/vuePress.md',
          '/other/nginx.md',
          '/other/sentry.md',
        ]
      },
      {
        text: '收藏的文章',
        collapsable: false,
        link: '/awesome/',
        children: [
          '/awesome/React.md',
          '/awesome/Typescript.md',
          '/awesome/Taro.md',
          '/awesome/concepts.md',
          '/awesome/tools.md',
          '/awesome/network.md',
          '/awesome/other.md',
        ]
      }
    ]
  }
};
