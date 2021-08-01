var arr = [1, [1, 2], [1, 2, 3], [1, 2, [1, 2]]]

// 递归方法
function flatten(arr) {
    var res = [];
    arr.forEach(element => {
        if (Array.isArray(element)) {
            res = res.concat(flatten(element))
        }
        else {
            res.push(element)
        }
    });
    return res
}
console.log(flatten(arr))

// reduce
function flatten2(arr) {
    return arr.reduce(function (acc, current) {
        return acc.concat(Array.isArray(current) ? flatten2(current) : current)
    }, [])
}
console.log(flatten2(arr))

// 扩展运算符
function flatten3(arr = []) {
    while (arr.some(item => {
        return Array.isArray(item)
    })) {
        arr = [].concat(...arr)
    }
    return arr
}
console.log(flatten3(arr));


var flatten4 = Function.apply.bind([].concat, [10])
var flatter5 = function(arg){
    return [].concat(...arg)
}
var flatten6 = function (arg) {
    return [].concat.call([], ...arg)
}
console.log(flatten4(arr));
console.log(flatter5(arr));
console.log(flatten6(arr));

