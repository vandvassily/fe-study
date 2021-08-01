// requestAnimationFrame

let count = 0;

// console.time('timerStart')
// new Promise((resolve, reject) => {
//     console.time('promiseStart')
//     resolve(2)
// }).then(res => {
//     console.timeEnd('promiseStart')
//     console.log(res)
// })
// setTimeout(() => {
//     console.log(123);
//     console.timeEnd('timerStart')
// }, 0)

let width = 0;
let div = document.querySelector('#process-bar')

function render() {
    width += 1;
    div.style.width = width + 'px'
    if(width < 1000) {
        requestAnimationFrame(render)
    }
}

requestAnimationFrame(render)

// for (let i = 0; i < 1000; i++) {
//     count++;
// }
// console.time('timerEnd')


// requestAnimationFrame(() => {
//     console.log(321);
//     console.timeEnd('timerEnd')
// })