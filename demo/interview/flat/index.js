// 数组拍平
const array = [1, 2, 3, [4, 5, [6]], [6, 7, [1, 2, [3]]]];

// 原生方法使用
const flat1 = array.flat(Infinity);
console.log(flat1);

// 循环递归
function flatArray(arr = []) {
    let ret = [];
    arr.forEach((value, index) => {
        if (Array.isArray(value)) {
            ret = ret.concat(flatArray(value));
        } else {
            ret.push(value);
        }
    });

    return ret;
}
console.log(flatArray(array));

// reduce
Array.prototype.flat2 = function () {
    return this.reduce((prev, cur) => {
        return prev.concat(Array.isArray(cur) ? cur.flat2() : cur);
    }, []);
};
console.log(array.flat2());

// reduce求和
var array2 = [1, 2, 3, 4, 5, 6, 7];
console.log(
    array2.reduce((prev, cur) => {
        return prev + cur;
    }, 0)
);
