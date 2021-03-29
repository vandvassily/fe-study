// 归并排序

(function () {
    const array = [1, 3, 5, 10, 6, 2, 7, 9, 11];
    function merge_sort(arr = []) {
        if (arr.length <= 1) return arr;
        const center = Math.floor(arr.length / 2);

        const left = merge_sort(arr.slice(0, center));
        const right = merge_sort(arr.slice(center, arr.length));

        return merge(left, right);
    }

    function merge(left = [], right = []) {
        const sortedArr = [];

        let leftIndex = 0;
        let rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] <= right[rightIndex]) {
                sortedArr.push(left[leftIndex]);
                leftIndex++;
            } else {
                sortedArr.push(right[rightIndex]);
                rightIndex++;
            }
        }

        return sortedArr.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    }
    console.log('归并排序');
    console.log(merge_sort(array));
})();
