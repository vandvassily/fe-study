// 选择排序
;(function() {
  const array = [1, 3, 5, 10, 6, 2, 7, 9, 11]

  /**
   * 选择排序
   * @param {Array} arr 数组
   */
  function selection_sort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let temp = i
      for (let j = i + 1; j < array.length; j++) {
        if (arr[temp] > arr[j]) {
          temp = j
        }
      }
      ;[arr[i], arr[temp]] = [arr[temp], arr[i]]
    }
    return arr
  }
  console.log('选择排序')
  console.log(selection_sort(array))
})()
