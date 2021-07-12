// 流程控制
// JS函数链式调用，实现一下task().eat().sleep(2000).eat().sleep(2000)函数
let index = 0;
let stack = [];
function next() {
    let fn = stack[index];
    index++;
    if (typeof fn === 'function') {
        fn();
    }
}
function T(name) {
    stack.push(function() {
        console.log('Hi! This is' + name);
        next();
    });
}
function task(name) {
    return new T(name);
}
T.prototype.sleep = function(delay) {
    stack.push(function() {
        setTimeout(() => {
            console.log('sleep have run end');
            next();
        }, delay);
    });
    return this;
};
T.prototype.eat = function() {
    stack.push(function() {
        console.log('eat have run end');
        next();
    });
    return this;
};

task('zhangsan')
    .sleep(1000)
    .eat()
    .sleep(1000)
    .eat();
next();

// promise版本
// 1) 调用方式
new People('whr')
    .sleep(3)
    .eat('apple')
    .sleep(5)
    .eat('durian');

// 2) 打印结果
//'hello, whr' -(等待3s)--> 'whr eat apple' -(等待5s)--> 'whr eat durian'

// 3) 以下是代码实现
class People {
    constructor(name) {
        this.name = name;
        this.sayHello();
        this.queue = Promise.resolve();
    }
    sayHello() {
        console.log(`hello, ${this.name}`);
    }
    sleep(time) {
        this.queue = this.queue.then(() => {
            return new Promise((res) => {
                setTimeout(() => {
                    res();
                }, time * 1000);
            });
        });
        return this;
    }
    eat(food) {
        this.queue = this.queue.then(() => {
            console.log(`${this.name} eat ${food}`);
        });
        return this;
    }
}
