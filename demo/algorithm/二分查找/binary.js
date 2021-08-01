(function (params) {
    const array = [1, 3, 5, 12, 16, 22, 24, 27, 32, 33, 37, 42, 47, 50];

    /**
     *  二分查找，循环版本
     * @param {Array} arr 原数组
     * @param {number} target 目标值
     * @return {number}
     */
    function binarySearch(arr, target) {
        let left = 0;
        let right = arr.length - 1;
        while (left <= right) {
            let center = Math.floor((left + right) / 2);

            if (target === arr[center]) {
                return center;
            } else if (target < arr[center]) {
                right = center - 1;
            } else {
                left = center + 1;
            }
        }

        return -1;
    }

    /**
     *  二分查找，递归版本
     * @param {Array} arr 原数组
     * @param {number} target 目标值
     * @return {number}
     */
    function binarySearchR(arr, target) {
        return binarySearch_b(arr, 0, arr.length - 1, target);
    }

    function binarySearch_b(arr, left, right, target) {
        let center = Math.floor((left + right) / 2);

        if (arr[center] === target) {
            return center;
        } else if (arr[center] > target) {
            return binarySearch_b(arr, left, center - 1, target);
        } else {
            return binarySearch_b(arr, center + 1, right, target);
        }
    }

    console.log(binarySearch(array, 25));
    console.log(binarySearchR(array, 27));
})();
