const nums = [1, 2, 3, 4];

const reducer = (prev, cur) => prev + cur;
const res = nums.reduce(reducer, 0);

console.log(res);

const nums2 = [1, 2, 1, 1, 3, 4, 5, 11, 22, 13, 13, 22];
const timesReducer = (acc, cur) => {
    acc[cur] ? acc[cur]++ : (acc[cur] = 1);
    return acc;
};

console.log(nums2.reduce(timesReducer, {}));
