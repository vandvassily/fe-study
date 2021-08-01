let data = [
    {
        id: '1',
        name: '1',
        fatherId: '0',
    },
    {
        id: '2',
        name: '1-1',
        fatherId: '1',
    },
    {
        id: '3',
        name: '1-2',
        fatherId: '1',
    },
    {
        id: '4',
        name: '1-1-1',
        fatherId: '2',
    },
    {
        id: '5',
        name: '1-1-2',
        fatherId: '2',
    },
    {
        id: '6',
        name: '2',
        fatherId: '0',
    },
    {
        id: '7',
        name: '1-2-1',
        fatherId: '3',
    },
];
console.log(JSON.parse(JSON.stringify(data)));


const map = {};
const val = [];
data.forEach((item) => {
    map[item.id] = item;
});
console.log(JSON.parse(JSON.stringify(map)));
data.forEach((item) => {
    const parent = map[item.fatherId];
    if (parent) {
        (parent.children || (parent.children = [])).push(item);
    } else {
        val.push(item);
    }
});

console.log(data);
console.log(val);
