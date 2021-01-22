class Watcher {
    constructor(vm, exp, cb) {
        this.vm = vm;
        this.exp = exp;
        this.cb = cb;

        this.value = this.get();
    }

    update() {
        this.run();
    }
    run() {
        var value = this.vm.data[this.exp];
        var oldVal = this.value;
        console.log(value);
        console.log(oldVal);
        if (value !== oldVal) {
            this.value = value;
            this.cb.call(this.vm, value, oldVal);
        }
    }
    get() {
        Dep.target = this; // 缓存自己
        var value = this.vm.data[this.exp]; // 强制执行监听器里的get函数
        Dep.target = null; // 释放自己
        return value;
    }
}
