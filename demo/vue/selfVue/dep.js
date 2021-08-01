class Dep {
    constructor() {
        this.subs = [];
    }

    addSub(sub) {
        this.subs.push(sub);
    }

    removeSub(sub) {
        remove(this.subs, sub);
    }

    notify() {
        this.subs.forEach((sub) => {
            sub.update();
        });
    }
}

Dep.target = null

function remove(arr, item) {
    if (arr.length) {
        const index = arr.indexOf(item);
        if (index > -1) {
            arr.splice(index, 1);
        }
    }
}
