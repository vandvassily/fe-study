// 冒泡排序

;(function() {
  const array = [1, 3, 5, 10, 6, 2, 7, 9, 11]

  /**
   * 冒泡排序
   * @param {Array} arr 数组
   */
  function bubble_sort(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] >= arr[j]) {
          ;[arr[i], arr[j]] = [arr[j], arr[i]]
        }
      }
    }

    return arr
  }

  console.log('冒泡排序')
  console.log(bubble_sort(array))
})()
