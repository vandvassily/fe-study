// 插入排序
(function () {
    const array = [1, 1, 3, 5, 10, 6, 2, 2, 7, 9, 11, 22, 13, 4, 8];
    let count = 0;
    /**
     * 插入排序
     * @param {Array} arr 数组
     */
    function insertion_sort(arr) {
        for (let i = 1; i < arr.length; i++) {
            for (let j = i; j > 0; j--) {
                count++;
                if (arr[j] < arr[j - 1]) {
                    [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
                } else {
                    break;
                }
            }
        }
        console.log(count);
        return arr;
    }
    console.log('插入排序');
    console.log(insertion_sort(array));
})();
