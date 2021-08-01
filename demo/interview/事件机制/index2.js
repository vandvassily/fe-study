const _div = document.getElementById('div2');
_div.addEventListener(
    'click',
    (e) => {
        console.log('div');
    },
    {
        once: true, // 是否只调用一次，调用后会自动销毁listener
        passive: false, // if true, 意味着listener永远不远调用preventDefault方法
        capture: false // 是否捕获阶段触发
    }
);

const _ul = document.querySelector('#ul2');
_ul.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('ul first');
});
_ul.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('ul second');
});
_ul.addEventListener(
    'click',
    (e) => {
        // e.stopPropagation();
        console.log('ul capture');
    },
    true
);
const _li = document.querySelector('#li2');
_li.addEventListener('click', (e) => {
    console.log('li');
    // e.stopPropagation();
});
