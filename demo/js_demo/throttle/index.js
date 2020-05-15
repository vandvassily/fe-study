var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
    console.log(e)
    container.innerHTML = count++;
    return '这是测试'
};

container.onmousemove = throttle(getUserAction, 200)

// 方案一： 使用时间戳
function throttle(func, wait) {
    // 起始时间戳
    var startTime = new Date().getTime();
    var context = this;

    return function() {
        var currentTime = new Date().getTime();
        if(currentTime - startTime > wait) {
            func.apply(context, arguments)
            startTime = currentTime
        }
    }
}

// 方案二： 使用定时器
function throttle2(func, wait) {
    var timer
    var context = this

    return function() {
        var args = arguments
        if(timer) return;
        timer = setTimeout(function() {
            func.apply(context, args)
            timer = null
        }, wait)
    }
}
