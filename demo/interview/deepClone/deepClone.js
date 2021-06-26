// 请实现深拷贝函数，并有如下要求：

// 需要支持数组、正则、函数以及 JSON 支持的数据类型
// 需要解决循环引用问题
// 完成以上内容后，请说明如果存在爆栈的情况该如何解决。

// 1. 判断是否是引用类型
// 1.1 判断是否是数组
// 1.1 判断是否是正则、日期、函数
// 2. 非引用类型，直接返回
// 3. 循环引用，使用WeakMap判断即可

function deepClone(obj, hashMap = new WeakMap()) {
    // 引用类型
    if (obj !== null && typeof obj === 'object') {
        if (obj instanceof RegExp) return new RegExp(obj)
        if (obj instanceof Date) return new Date(obj)
        if (typeof obj === 'function') return obj;
        let cloneObj = Array.isArray(obj) ? [] : {};
        // 解决循环引用
        if (hashMap.has(obj)) { return hashMap.get(obj) }
        hashMap.set(obj, cloneObj)

        for (const key in obj) {
            cloneObj[key] = deepClone(obj[key], hashMap)
        }
        return cloneObj
    }
    else {
        // 基本类型
        return obj
    }
}

var test = {a:1}

var a = {
    a: 1,
    b: true,
    c: '123',
    d: {
        a: 1,
        b: 2
    },
    e: function () {
        console.log(this)
        console.log(123)
    },
    f: [1, 2, 3, 4, 5, { a: 1 }],
    g: new Date(),
    i: undefined,
    j: null,
    k: new RegExp(/.+/),
    m: test,
    n: test
}
var a1 = deepClone(a)
console.log(a);
console.log(a1);
console.log(a === a1);
console.log(a.e === a1.e);
console.log(a.f === a1.f);
console.log(a.m === a.n);
console.log(a1.m === a1.n);
console.log(JSON.parse(JSON.stringify(a)))
