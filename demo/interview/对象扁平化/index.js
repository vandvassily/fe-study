var obj = {
    a: {
        a1: 1,
        a2: 2,
        a3: {
            a4: 4,
        },
    },
    a2: {
        b: 3,
    },
};
// 广度优先
function flatObj(entry) {
    const queue = Object.entries(entry);
    const res = {};

    while (queue.length) {
        const [key, obj] = queue.pop();
        for (const [k, o] of Object.entries(obj)) {
            if (typeof o !== 'object') {
                res[`${key}.${k}`] = o;
            } else {
                queue.push([`${key}.${k}`, o]);
            }
        }
    }

    return res;
}

// 深度优先
function flatObj2(entry) {
    let res = {};
    dfs(entry, '', res);
    return res;
}

function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}

function dfs(obj, prefix, res = {}) {
    for (const key in obj) {
        let newPrefix = prefix ? prefix + '.' + key : key;
        isObject(obj[key])
            ? dfs(obj[key], newPrefix, res)
            : (res[newPrefix] = obj[key]);
    }

		return res;
}
let res = flatObj(obj);
let res2 = flatObj2(obj);
console.log(res);
console.log(res2);
