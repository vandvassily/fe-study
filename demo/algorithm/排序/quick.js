// 快速排序
; (function () {
  const array = [1, 3, 5, 10, 6, 2, 7, 9, 11]
  /**
 * 快速排序
 * @param {Array} arr 
 */
  function quickSort(arr) {
    quickSortC(arr, 0, arr.length - 1)
    return arr;
  }

  function quickSortC(arr, left, right) {
    if (left >= right) return;

    const pivot = partition(arr, left, right);

    quickSortC(arr, left, pivot - 1);
    quickSortC(arr, pivot + 1, right);
  }

  function partition(arr, left, right) {
    const pivot = left
    let index = left + 1;

    for (let i = index; i <= right; i++) {
      if (arr[i] < arr[pivot]) {
        [arr[i], arr[index]] = [arr[index], arr[i]]
        index++;
      }
    };

    [arr[index - 1], arr[pivot]] = [arr[pivot], arr[index - 1]]

    return index - 1
  }

  console.log(quickSort(array))

  //   // 第一种
  //   /**
  //  * 快速排序
  //  * @param {Array} arr 
  //  */
  //   function quickSort(arr) {
  //     if (arr.length < 2) return arr;
  //     const left = [];
  //     const right = [];
  //     const center = [];

  //     const pivot = (arr.length - 1) >> 1

  //     for (let i = 0; i < arr.length; i++) {
  //       if (arr[i] < arr[pivot]) {
  //         left.push(arr[i])
  //       } else if (arr[i] > arr[pivot]) {
  //         right.push(arr[i])
  //       }
  //       else {
  //         center.push(arr[i])
  //       }
  //     }

  //     return quickSort(left).concat(center).concat(quickSort(right))
  //   }

  //   /**
  //    * 快速排序
  //    * @param {Array} arr 数组
  //    */
  //   function quick_sort(arr) {
  //     return quick_sort_c(arr, 0, arr.length - 1)
  //   }

  //   function quick_sort_c(arr, left, right) {
  //     if (left < right) {
  //       const i = partition(arr, left, right)

  //       quick_sort_c(arr, left, i - 1)
  //       quick_sort_c(arr, i + 1, right)
  //     }
  //     return arr
  //   }

  //   function partition(arr, left, right) {
  //     let pivot = left
  //     let index = pivot + 1
  //     for (let i = index; i <= right; i++) {
  //       if (arr[i] < arr[pivot]) {
  //         ;[arr[i], arr[index]] = [arr[index], arr[i]]
  //         index++
  //       }
  //     }
  //     ;[arr[pivot], arr[index - 1]] = [arr[index - 1], arr[pivot]]
  //     return index - 1
  //   }


  console.log('快速排序')
  // console.log(quick_sort(array))
})()
