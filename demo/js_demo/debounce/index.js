var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
    console.log(e)
    container.innerHTML = count++;
    return '这是测试'
};

/**
 * 防抖函数
 * @param {*} func 需要防抖处理的函数
 * @param {*} wait 等待时间
 * @param {*} immediate 是否立即执行
 */
function debounce(func, wait, immediate) {
    var timeout, result;
    var debounced = function () {
        var context = this
        var args = arguments

        if (timeout) clearTimeout(timeout);
        if (immediate) {
            var callNow = !timeout;
            timeout = setTimeout(function () {
                timeout = null
            }, wait)

            if (callNow) result = func.apply(context, args);
        }
        else {
            timeout = setTimeout(function () {
                func.apply(context, args)
            }, wait)
        }

        return result
    }

    debounced.cancle = function () {
        clearTimeout(timeout);
        timeout = null;
        console.log('取消成功');
    }

    return debounced
}

var setUseAction = debounce(getUserAction, 2000, true)

container.onmousemove = setUseAction

document.getElementById('cancle').addEventListener('click', function () {
    setUseAction.cancle();
})
