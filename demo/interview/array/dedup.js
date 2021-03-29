// 给定一个任意数组，实现一个通用函数，让数组中的数据根据 key 排重：
// const dedup = (data, getKey = () => {}) => {
//     // todo
// };
let data = [
    { id: 1, v: 1 },
    { id: 2, v: 2 },
    { id: 1, v: 1 },
    { id: 3, v: 1 }
];

// 以 id 作为排重 key，执行函数得到结果
// data = [
//   { id: 1, v: 1 },
//   { id: 2, v: 2 },
// ];

let data1 = [
    { id: 1, v: 1, id1: 1 },
    { id: 2, v: 2, id1: 2 },
    { id: 1, v: 1, id1: 1 }
];

// 以 id 和 id1 作为排重 key，执行函数得到结果
// data1 = [
//   { id: 1, v: 1, id1: 1 },
//   { id: 2, v: 2, id1: 2 },
// ];

const dedup = (data, getKey = () => {}) => {
    const res = [];
    const map = {};
    data.forEach((value, index) => {
        if (!map[getKey(value)]) {
            map[getKey(value)] = value;
            res.push(value);
        }
    });

    return res;
};

console.log(
    dedup(data, (value) => {
        return `v${value.v}`;
    })
);
