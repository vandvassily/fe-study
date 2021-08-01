module.exports = {
    base: '/fe-study/',
    title: 'fe-study',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    description: '前端知识积累',
    ga: 'UA-117533223-1',
    serviceWorker: true,
    plugins: [
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-117533223-1'
            }
        ]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        logo: '/img/logo.jpg',
        sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Blog', link: 'http://vandvassily.cn/' },
            { text: 'Github', link: 'https://github.com/vandvassily/fe-study' },
        ],
        sidebar: [
            {
                title: 'JS知识',
                collapsable: false,
                path: '/js_study/',
                children: [
                    ['/js_study/basic/数据类型.md', '数据类型'],
                    ['/js_study/basic/原型.md', '原型'],
                    ['/js_study/basic/执行上下文.md', '执行上下文与作用域'],
                    ['/js_study/basic/this.md', 'this'],
                    ['/js_study/basic/new.md', 'new的原理'],
                    ['/js_study/basic/call apply bind.md', 'call apply bind'],
                    ['/js_study/basic/EventLoop.md', 'EventLoop 事件循环'],
                    ['/js_study/basic/array.md', '数组方法和使用'],
                ]
            },
            {
                title: 'CSS知识',
                collapsable: false,
                children: [
                    ['/css_study/', 'rem初始化']
                ]
            },
            {
                title: '数据结构',
                collapsable: true,
                path: '/structure/',
                children: [
                    ['/structure/复杂度分析-上.md', '复杂度分析(上)'],
                    ['/structure/复杂度分析-下.md', '复杂度分析(下)'],
                    ['/structure/链表.md', '链表'],
                    ['/structure/数组.md', '数组'],
                ]
            },
            {
                title: '算法',
                collapsable: true,
                path: '/algorithm',
                children: [
                    ['/algorithm/回溯算法.md', '回溯算法'],
                    ['/algorithm/链表.md', '链表'],
                    ['/algorithm/排序.md', '排序'],
                    ['/algorithm/字符串匹配.md', '字符串匹配']
                ]
            },
            {
                title: 'leetcode',
                collapsable: true,
                path: '/leetcode/',
                children: [
                    ['/leetcode/19.删除链表倒数第N个结点.md', '19.删除链表倒数第N个结点']
                ]
            },
            {
                title: '正则',
                collapsable: true,
                path: '/regex/',
                children: [
                ]
            },
            {
                title: 'Vue知识点',
                collapsable: true,
                path: '/vue/',
                children: [
                    ['/vue/lifeCircle.md', 'vue生命周期']
                ]
            },
            {
                title: '其他',
                collapsable: false,
                path: '/other/',
                children: [
                    ['/other/indexedDB.md', '浏览器数据库indexedDB'],
                    ['/other/npm link.md', 'npm link的使用'],
                    ['/other/vuePress.md', 'vuePress使用'],
                    ['/other/输入URL.md', '输入URL'],
                    ['/other/babel.md', 'babel的原理和使用'],
                    ['/other/jenkins.md', 'jenkins的用法'],
                    ['/other/nginx.md', 'nginx的概念和用法'],
                    ['/other/rollup.md', 'rollup的用法']
                ]
            }
        ]
    }
}