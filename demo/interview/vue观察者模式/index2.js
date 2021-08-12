// codepen:  https://codepen.io/vandvassily/pen/vYmPKvj
let data = { price: 5, quantity: 2 };
let target, total, salePrice;

class Dep {
    // write your code here
    constructor(){
        this.deps = []
    }

    depend(fn) {
        this.deps.push(fn)
    }

    notify() {
        this.deps.forEach(fn => fn())
    }
}

Object.keys(data).forEach((key) => {
    // write your code here
    const dep = new Dep();
    let value = data[key];
    Object.defineProperty(data, key, {
        get() {
            if(target) {
                dep.depend(target)
            }
            return value
        },
        set(val) {
            value = val
            dep.notify()
        }
    })
});

function watcher(fn) {
    // write your code here
    target = fn
    fn()
    target = null
}

watcher(() => {
    total = data.price * data.quantity;
});

watcher(() => {
    salePrice = data.price * 0.9;
});

console.log(`initial total: ${total}`);
console.log(`initial salePrice: ${salePrice}`);

data.price = 10;
console.log(`total: ${total}`); // total: 20
console.log(`salePrice: ${salePrice}`); // salePrice: 9

