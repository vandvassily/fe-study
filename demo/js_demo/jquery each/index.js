// jQuery each 实现

function each(obj, callback) {
    if (isArrayLike(obj)) {
        for (let index = 0; index < obj.length; index++) {
            const element = obj[index];
            if (typeof callback === 'function') {
                let res = callback(index, element)
                if (res === false) break;
            }
        }
    }
    else {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const element = obj[key];
                if (typeof callback === 'function') {
                    let res = callback(key, element)
                    if (res === false) break;
                }
            }
        }
    }
}

function type(obj){
    return typeof obj
}

function isArrayLike(obj) {
    // obj 必须有 length属性
    var length = !!obj && "length" in obj && obj.length;
    var typeRes = type(obj);

    // 排除掉函数和 Window 对象
    if (typeRes === "function" || obj === window) {
        return false;
    }

    return typeRes === "array" || length === 0 ||
        typeof length === "number" && length > 0 && (length - 1) in obj;
}

// each([1, 2, 3, 4], function (index, element) {
//     console.log(`index: ${index} value: ${element}`)
//     if (index === 1) return false;
// })

var obj = {
    a: 1,
    b: 2,
    c: 3,
    d: [12, 34]
}

var arrayLike = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    length: 4
}
each(obj, function (index, element) {
    console.log(`index: ${index} value: ${element}`)
    // if (index === 'a') return false;
})
each(arrayLike, function (index, element) {
    console.log(`index: ${index} value: ${element}`)
    // if (index === 'a') return false;
})