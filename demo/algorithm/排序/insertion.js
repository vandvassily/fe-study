// 插入排序
;(function() {
  const array = [1, 3, 5, 10, 6, 2, 7, 9, 11]

  /**
   * 插入排序
   * @param {Array} arr 数组
   */
  function insertion_sort(arr) {
    for (let i = 1; i < arr.length; i++) {
      for (let j = i; j > 0; j--) {
        if (arr[j] <= arr[j - 1]) {
          ;[arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
        }
      }
    }
    return arr
  }
  console.log('插入排序')
  console.log(insertion_sort(array))
})()
