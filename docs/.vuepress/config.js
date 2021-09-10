const { path } = require('@vuepress/utils');

module.exports = {
  base: '/fe-study/',
  title: 'fe-study',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  description: '前端知识积累',
  ga: 'UA-117533223-1',
  serviceWorker: true,
  plugins: [
    [
      '@vuepress/plugin-google-analytics',
      {
        ga: 'UA-117533223-1'
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
        link: '/js_study/',
        children: [
          '/js_study/basic/数据类型.md',
          '/js_study/basic/原型.md',
          '/js_study/basic/词法作用域.md',
          '/js_study/basic/执行上下文.md',
          '/js_study/basic/执行上下文栈.md',
          '/js_study/basic/作用域链.md',
          '/js_study/basic/this.md',
          '/js_study/basic/new.md',
          '/js_study/basic/call apply bind.md',
          '/js_study/basic/EventLoop.md',
          '/js_study/basic/array.md',
          '/js_study/basic/currying.md',
          '/js_study/basic/深拷贝.md',
          '/js_study/usage/debounce.md',
          '/js_study/usage/throttle.md'
        ]
      },
      {
        text: 'CSS知识',
        collapsable: false,
        children: ['/css_study/']
      },
      {
        text: '数据结构',
        collapsable: true,
        link: '/structure/',
        children: [
          '/structure/复杂度分析-上.md',
          '/structure/复杂度分析-下.md',
          '/structure/链表.md',
          '/structure/数组.md'
        ]
      },
      {
        text: '算法',
        collapsable: true,
        link: '/algorithm',
        children: ['/algorithm/回溯算法.md', '/algorithm/链表.md', '/algorithm/排序.md', '/algorithm/字符串匹配.md']
      },
      {
        text: 'leetcode',
        collapsable: true,
        link: '/leetcode/',
        children: ['/leetcode/19.删除链表倒数第N个结点.md']
      },
      {
        text: '正则',
        collapsable: true,
        link: '/regex/',
        children: []
      },
      {
        text: 'Vue知识点',
        collapsable: true,
        link: '/vue/',
        children: ['/vue/lifeCircle.md']
      },
      {
        text: '其他',
        collapsable: false,
        link: '/other/',
        children: [
          '/other/输入URL.md',
          '/other/indexedDB.md',
          '/other/npm link.md',
          '/other/vuePress.md',
          '/other/babel.md',
          '/other/jenkins.md',
          '/other/nginx.md',
          '/other/rollup.md',
          '/other/lerna.md',
          '/other/vue2改造为vite构建.md',
          '/other/sentry.md'
        ]
      }
    ]
  }
};
