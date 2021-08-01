var obj = {
    data: {
        name: '小明',
        age: 12
    }
}

function noop(){}

const sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    set: noop,
    get: noop
}

function proxy(target, sourceKey, key) {

    sharedPropertyDefinition.get = function proxyGetter(){
        return this[sourceKey][key]
    }

    sharedPropertyDefinition.set = function proxyGetter(val) {
        this[sourceKey][key] = val;
    };

    Object.defineProperty(target, key, sharedPropertyDefinition)
}

for (const key in obj.data) {
    if (Object.hasOwnProperty.call(obj.data, key)) {
        proxy(obj, 'data', key);
    }
}

console.log(obj)
