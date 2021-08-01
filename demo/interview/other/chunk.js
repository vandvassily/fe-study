let _ = {
    chunk: function (arr, size) {
        if (size === 0) {
            return [];
        }
        const nums = Math.ceil(arr.length / size);
        const res = [];
        for (let i = 0; i <= nums - 1; i++) {
            res.push(arr.slice(i * size, (i + 1) * size));
        }
        return res;
    }
};

/**
 * @param input
 * @param size
 * @returns {Array}
 */
console.log(_.chunk(['a', 'b', 'c', 'd'], 2));
// => [['a', 'b'], ['c', 'd']]

console.log(_.chunk(['a', 'b', 'c', 'd'], 3));
// => [['a', 'b', 'c'], ['d']]

console.log(_.chunk(['a', 'b', 'c', 'd'], 5));
// => [['a', 'b', 'c', 'd']]

console.log(_.chunk(['a', 'b', 'c', 'd'], 0));
// => []
