let obj = {
    a: 1,
    b: {
        name: 'test',
        say() {
            console.log('this is say');
        },
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

function deepClone(object) {
    let newObject = {};
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const item = object[key];
            if (typeof item === 'object' && item !== null) {
                if (Array.isArray(item)) {
                    newObject[key] = Array.prototype.slice.call(item);
                }
                else if(item instanceof Date) {
                    newObject[key] = new Date(item)
                }
                else {
                    newObject[key] = deepClone(item);
                }
            } else {
                newObject[key] = item;
            }
        }
    }

    return newObject;
}
var obj2 = deepClone(obj);
console.log(obj);
console.log(obj2);
