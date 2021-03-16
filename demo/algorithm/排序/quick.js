// 快速排序
;(function() {
  const array = [1, 3, 5, 10, 6, 2, 7, 9, 11]

  /**
   * 快速排序
   * @param {Array} arr 数组
   */
  function quick_sort(arr) {
    return quick_sort_c(arr, 0, arr.length - 1)
  }

  function quick_sort_c(arr, left, right) {
    if (left < right) {
      const i = partition(arr, left, right)

      quick_sort_c(arr, left, i - 1)
      quick_sort_c(arr, i + 1, right)
    }
    return arr
  }

  function partition(arr, left, right) {
    let pivot = left
    let index = pivot + 1
    for (let i = index; i <= right; i++) {
      if (arr[i] < arr[pivot]) {
        ;[arr[i], arr[index]] = [arr[index], arr[i]]
        index++
      }
    }
    ;[arr[pivot], arr[index - 1]] = [arr[index - 1], arr[pivot]]
    return index - 1
  }
  console.log('快速排序')
  console.log(quick_sort(array))
})()
