// 原生 js 题目： 实现一个 fn 函数
const o = { a: 1, b: [1, 2, { c: true }], d: { e: 2, f: 3 }, g: null };
// fn(o)
// =>
// { "a": 1, "b[0]": 1, "b[1]": 2, "b[2].c": true, "d.e": 2, ... }

function fn(obj) {
    const newObj = {};
    function dfs(prefix, obj, res) {
        if (typeof obj !== 'object' || obj === null) {
            res[prefix] = obj;
        } else {
            for (const key in obj) {
                const element = obj[key];
                let newPrefix = prefix
                    ? (prefix + (Array.isArray(obj) ? `[${key}]` : `.${key}`))
                    : key;

                dfs(newPrefix, element, res);
            }
        }
    }

    dfs('', obj, newObj);

    return newObj;
}
console.log(fn(o));
// fn(o);
