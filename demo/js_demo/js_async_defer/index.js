function performanceTiming(window) {
    setTimeout(function() {
        try {
            var e = window.performance;
            var t = e.getEntriesByType('navigation')[0];
            var r = 0;
            t || (r = (t = e.timing).navigationStart);
            var FPData = e.getEntriesByType('paint').find(function(d) {
                return d.name === 'first-paint';
            });
            var fCPData = e.getEntriesByType('paint').find(function(d) {
                return d.name === 'first-contentful-paint';
            });
            var n = [
                {
                    key: 'Redirect',
                    desc: '网页重定向的耗时',
                    value: t.redirectEnd - t.redirectStart,
                },
                {
                    key: 'AppCache',
                    desc: '检查本地缓存的耗时',
                    value: t.domainLookupStart - t.fetchStart,
                },
                {
                    key: 'DNS',
                    desc: 'DNS查询的耗时',
                    value: t.domainLookupEnd - t.domainLookupStart,
                },
                {
                    key: 'TCP',
                    desc: 'TCP连接的耗时',
                    value: t.connectEnd - t.connectStart,
                },
                {
                    key: 'Waiting(TTFB)',
                    desc:
                        '从客户端发起请求到接收到响应的时间 / Time To First Byte',
                    value: t.responseStart - t.requestStart,
                },
                {
                    key: 'Content Download',
                    desc: '下载服务端返回数据的时间',
                    value: t.responseEnd - t.responseStart,
                },
                {
                    key: 'HTTP Total Time',
                    desc: 'http请求总耗时',
                    value: t.responseEnd - t.requestStart,
                },
                {
                    key: 'DOMContentLoaded',
                    desc: 'dom加载完成的时间',
                    value: t.domContentLoadedEventEnd - r,
                },
                {
                    key: 'Loaded',
                    desc: '页面load的总耗时',
                    value: t.loadEventEnd - r,
                },
                {
                    key: 'FP',
                    desc: 'FP时间',
                    value: FPData ? FPData.startTime : '',
                },
                {
                    key: 'Blank FCP时间',
                    desc: '白屏时间',
                    value: fCPData ? fCPData.startTime : '',
                },
            ];
            console.table && console.table(n);
        } catch (e) {
            console.error('性能监控出错', e);
        }
    }, 1000);
}

let count = 0;
for (let i = 0; i < 10000000; i++) {
    count++;
}

console.log('123')

