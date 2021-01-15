class Person {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    static say() {
        console.log(`this is static say`)
    }

    sayName(){
        console.log(`my name is ${this.name}`)
    }
}

class Son extends Person {
    constructor(name, sex){
        super(name, sex)
    }

    schoolYear = 0

    sonSayName(){
        console.log(`son say his name is ${this.name}`);
    }
}

let son = new Son('xiaoming', '16')
console.log(son)