// deepClone
const reg = new RegExp(/\W/);
const obj = {
    a: 1,
    b: '123',
    c: null,
    d: true,
    e: new Date(),
    f: reg,
    g: function() {}
};

const obj2 = {
    a: 1,
    b: {
        name: 'test',
        say() {
            console.log('this is say');
        }
    },
    c: [1, 2, 3, 4],
    d: undefined,
    e: null,
    f: {
        g: {
            h: 'test'
        }
    },
    g: new Date()
};

obj2.h = obj
obj.h = obj2

function deepClone(obj, hashmap = new WeakMap()) {
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);

    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    
    const newObj = new obj.constructor();
    if(hashmap.has(obj)) {
        return hashmap.get(obj)
    }
    hashmap.set(obj, obj)

    for (const key in obj) {
        newObj[key] = deepClone(obj[key], hashmap);
    }

    return newObj;
}
console.log(obj === deepClone(obj));
