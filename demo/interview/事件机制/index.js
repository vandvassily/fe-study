const _div = document.getElementById('parent');
_div.addEventListener(
    'click',
    (e) => {
        console.log('div');
    },
    false
);

const _ul = document.querySelector('#ul1');
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
const _li = document.querySelector('#li1');
_li.addEventListener('click', (e) => {
    console.log('li');
    // e.stopPropagation();
});
