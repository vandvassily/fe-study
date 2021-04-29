let length = 10
function fn() {
    console.log(this.length);
}
let obj = {
    length: 5,
    method(fn) {
        // 两次调用各输出什么
        fn()
        arguments[0](0)
    }
}
obj.method(fn, 1)
// window.length的值
// arguments.length

// 1. let const 声明，变量并不会挂载到 window 上；var 声明，变量会挂载到 window上
// 2. fn()，fn作为普通函数调用时，内部 this 指向 window
// 3. arguments 是类数组，{0: fn, 1: 1, length: 2}；arguments[0](0)，相当于 arguments.fn(0)，函数内 this 指向 arguments