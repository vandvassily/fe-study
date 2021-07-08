var a = 0
var b = async () => {
    a = a + await 10
    console.log('2', a) // -> ？
}
b()
a++
console.log('1', a) // -> ？

// 1 1
// 2 10

// 1. b()，async返回的是promise对象，遇到 await前的代码是同步执行的
// 2. js代码均为从左到右进行执行，在加法运算时，会先确定左值，再确定右值；即 a = 0 + (await 10);
// 3. a++， a = 0 + 1，a为1
// 4. console.log('1', a)， 打印 1 1
// 5. a = 0 + 10，a为10，打印 2 10

// 如果换个顺序，打印结果就不一样了

var a = 0
var b = async () => {
    a = await 10 + a
    console.log('2', a) // -> ？
}
b()
a++
console.log('1', a) // -> ？

// 1 1
// 2 11