let obj = {}
let proxy = new Proxy(obj, {
    get: function(obj, prop){
        console.log('设置 get 操作')
        return obj[prop];
    },
    set: function(obj, prop, value){
        console.log('设置 set 操作')
        obj[prop] = value;
    }
})

proxy.time = 15
proxy.time
proxy.gender = '1'