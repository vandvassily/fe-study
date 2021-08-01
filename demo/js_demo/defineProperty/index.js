let obj = {}

Object.defineProperty(obj, 'num', {
    enumerable: true,
    configurable: true,
    value: 1,
    writable: true
});

Object.defineProperty(obj, 'age', {
    enumerable: true,
    configurable: true,
    get() {
        return this._age;
    },
    set(newAge) {
        this._age = newAge;
    }
});

var obj1 = Object.defineProperty({a:1}, 'num', {});

console.log(obj1); // undefined

console.log(obj);

var obj2 = {}, value = null;
Object.defineProperty(obj2, "num", {
    get: function(){
        console.log('执行了 get 操作')
        return value;
    },
    set: function(newValue) {
        console.log('执行了 set 操作')
        value = newValue;
    }
})

obj2.num = 1 // 执行了 set 操作

console.log(obj2.num); // 执行了 get 操作 // 1

function Observe(){
    let value = null;
    var arr = [];

    Object.defineProperty(this, 'num', {
        get: function() {
            console.log('执行了 get 操作')
            return value;
        },
        set: function(val) {
            console.log('执行了 set 操作')
            value = val;
            arr.push({ value: val });
        }
    })

    this.getArr = function () {
        return arr
    }
}

var a = new Observe();
a.num
a.num = 11;
a.num = 13;
console.log(a.getArr())

var data = {
    num: 1
}

// var dataValue = 1;

// Object.defineProperty(data, 'num', {
//     get: function(){
//         return dataValue
//     },
//     set: function (newVal) {
//         dataValue = newVal
//         document.getElementById('number').innerHTML = newVal
//     }
// })

// document.getElementById('button').addEventListener('click', function(){
//     data.num += 1;
// }, false)


;(function(root){
    function watch (obj, name, func) {
        var value = obj[name];

        Object.defineProperty(obj, name, {
            get: function(){
                return value
            },
            set: function (newVal) {
                value = newVal
                func(newVal)
            }
        })

        if(value) obj[name] = value
    }

    root.watch = watch
})(window)

watch(data, 'num', function(newVal){
    document.getElementById('number').innerHTML = newVal
})

document.getElementById('button').addEventListener('click', function(){
    data.num += 1;
}, false)