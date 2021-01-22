class SelfVue {
    constructor(data, el, key){
        let vm = this;
        this.data = data
        observe(data);

        Object.keys(data).forEach(function(name) {
            proxy(vm, 'data', name);
        })

        new Watcher(this, key, function(val){
            el.innerHTML = val;
        })
        el.innerHTML = this.data[key]
        return this
    }
}

var el = document.querySelector('#app');
var vm = new SelfVue({
    name: 'zhs',
    msg: 'hello'
}, el, 'name');


setTimeout(function(){
    vm.data.name = 213;
}, 3000)

let app = nodeToFragment('#fragment');
console.dir(app)