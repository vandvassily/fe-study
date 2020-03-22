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
                    ['/js_study/basic/this.md', 'this']
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
                title: '算法',
                collapsable: true,
                path: '/algorithm',
                children: [
                    ['/', '算法']
                ]
            }
        ]
    }
}