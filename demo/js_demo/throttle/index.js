var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
    console.log(e);
    container.innerHTML = count++;
    return '这是测试';
}

container.onmousemove = throttleTogether(getUserAction, 500);

// 方案一： 使用时间戳
function throttle(func, wait) {
    // 起始时间戳
    var previousTime = 0;
    var context;

    return function() {
        context = this;
        var currentTime = new Date().getTime();
        if (currentTime - previousTime > wait) {
            func.apply(context, arguments);
            previousTime = currentTime;
        }
    };
}

// 方案二： 使用定时器
function throttle2(func, wait) {
    var timer, context;

    return function() {
        var args = arguments;
        context = this;
        if (timer) return;
        timer = setTimeout(function() {
            func.apply(context, args);
            timer = null;
        }, wait);
    };
}

// 加入
function throttleTogether(func, wait) {
    var timer;
    var context;
    var previousTime = 0;

    return function() {
        var args = arguments;
        context = this;

        var currentTime = new Date().getTime();
        var remaining = wait - (currentTime - previousTime);

        if (remaining <= 0) {
            // 剩余时间小于等于0，需要清空定时器，同时立即执行
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            console.log('直接执行');
            func.apply(context, args);
            previousTime = currentTime;
        } else if (!timer) {
            // 剩余时间大于0 且 定时器不存在，则设置剩余时间之后，执行方法
            timer = setTimeout(function() {
                console.log('timer执行');
                func.apply(context, args);
                timer = null;
                previousTime = new Date().getTime();
            }, remaining);
        }
    };
}
