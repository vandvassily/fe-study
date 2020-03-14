module.exports = {
    base: '/fe-study/',
    title: 'fe-study',
    description: '前端知识学习',
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
        nav: [
            { text: 'Blog', link: 'http://vandvassily.cn/' },
            { text: 'Github', link: 'https://github.com/vandvassily/fe-study' },
        ],
        sidebar: [
            {
                title: 'JS知识',
                collapsable: false,
                path: '/js_study/',
                children: [
                    ['/', '单行及多行省略号']
                ]
            },
            {
                title: 'CSS知识',
                collapsable: false,
                children: [
                    ['/css_study/', 'rem初始化']
                ]
            }
        ]
    }
}