function deepClone(obj, hashMap = new WeakMap()) {
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);

    if (obj === null || typeof obj !== 'object') return obj;

    if (hashMap.has(obj)) return obj;

    let newObj = new obj.constructor();
    hashMap.set(obj, newObj);

    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            newObj[key] = deepClone(obj[key], hashMap);
        }
    }

    return newObj;
}

var test = { a: 1 };

var b = {
    a: 1,
    b: true,
    c: '123',
    d: {
        a: 1,
        b: 2
    },
    e: function () {
        console.log(this);
        console.log(123);
    },
    f: [1, 2, 3, 4, 5, { a: 1 }],
    g: new Date(),
    i: undefined,
    j: null,
    k: new RegExp(/.+/),
    m: test,
    n: test
};
var b1 = deepClone(b);

console.log(b);
console.log(b1);
