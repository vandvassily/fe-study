(function () {
    const array = [1, 3, 5, 12, 16, 22, 22, 24, 27, 32, 33, 37, 42, 47, 50];

    /**
     * 查找第一个大于等于给定值的元素
     * @param {Array} arr 已排序数组
     * @returns {number} 元素索引
     */
    function binarySearchGreater(arr, target) {
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            const mid = (left + right) >> 1;

            if (arr[mid] >= target) {
                if (mid === 0 || arr[mid - 1] < target) {
                    return mid;
                } else {
                    right = mid - 1;
                }
            } else {
                left = mid + 1;
            }
        }

        return -1;
    }

    console.log(binarySearchGreater(array, 23), array[binarySearchGreater(array, 23)]);
})();
