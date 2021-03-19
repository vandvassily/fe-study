(function () {
    const array = [1, 3, 5, 12, 16, 22, 22, 24, 27, 32, 33, 37, 42, 47, 50];

    /**
     * 查找最后一个元素
     * @param {Array} arr 已排序数组
     */
    function binarySearchLast(arr, target) {
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            const mid = (left + right) >> 1;
            if (arr[mid] < target) {
                left = mid + 1;
            } else if (arr[mid] > target) {
                right = mid - 1;
            } else {
                if (mid === arr.length -1 || arr[mid + 1] !== target) {
                    return mid;
                } else {
                    left = left + 1;
                }
            }
        }

        return -1;
    }

    console.log(binarySearchLast(array, 22));
})();
