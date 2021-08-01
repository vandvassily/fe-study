// 堆排序
const array = [1, 7, 4, 3, 3, 1, 1, 7, 2, 7];

function heapSort(arr, size) {
    if (!Array.isArray(arr)) return;

    // 建立堆
    buildHeap(arr, arr.length);

    for (let j = size - 1; j >= 0; j--) {
        swap(arr, 0, j);
        heapify(arr, j, 0);
    }
}

// 建立大顶堆
function buildHeap(nums, len) {
    for (let i = (len - 1) >> 1; i >= 0; i--) {
        heapify(nums, len, i);
    }
}

// 堆化
function heapify(array, size, root) {
    let largest = root;
    const left = 2 * root + 1;
    const right = 2 * root + 2;

    if (left < size && array[left] > array[largest]) {
        largest = left;
    }

    if (right < size && array[right] > array[largest]) {
        largest = right;
    }

    if (largest !== root) {
        swap(array, root, largest);
        heapify(array, size, largest);
    }
}

// 交换
function swap(nums, i, y) {
    const temp = nums[y];
    nums[y] = nums[i];
    nums[i] = temp;
}
heapSort(array, array.length);
console.log(array);
