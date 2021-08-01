var arr = [1, 2, 3, [1, 2, [4, 5]], [2, 3]]

Array.prototype.flat2 = function (nums = 1) {
    return nums > 0 ? this.reduce((prev, cur) => {
        return prev.concat(Array.isArray(cur) ? cur.flat2(nums - 1) : cur)
    }, []) : this.slice()
}
console.log(arr.flat2(0));