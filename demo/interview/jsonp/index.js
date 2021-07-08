function jsonp({url, data, callback}) {
    const container = document.getElementsByTagName('head')[0];
    const funcName = `callback_` + new Date().getTime()

    var script = document.createElement('script');
    script.type = 'text/javascript'
    script.src = url + '?' + objectToJson(data) + '&callback=' + funcName;
    container.appendChild(script);

    window[funcName] = function(res) {
        callback && callback(res)
        container.removeChild(script);
        delete window[funcName]
    }

    script.onerror = function() {
        callback && callback('jsonp error');
        container.removeChild(script);
        delete window[funcName];
    }
}

// 对象转json
function objectToJson(obj) {
    let str = '';
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            str += encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]) + '&'
        }
    }
    return str
}

jsonp({
    url: 'http://www.baidu.com',
    data: {
        name: 1,
        age: 12
    },
    callback: function() {
        console.log(123)
    }
})

// promise处理