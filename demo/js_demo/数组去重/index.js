// 数组去重

var array = [1, 1, '1', '1', 2, 3, 4]

// 双重循环
function unique(array) {
  var res = []

  for (var i = 0, arrayLen = array.length; i < arrayLen; i++) {
    for (var y = 0, resLen = res.length; y < resLen; y++) {
      // 如果有相等的值，那就跳出循环
      if (array[i] === res[y]) {
        break
      }
    }
    // 如果执行完循环，y的值等于结果数组的长度，则证明array[i]的值唯一
    if (y === res.length) {
      res.push(array[i])
    }
  }

  return res
}

// 利用indexOf
function unique1(array) {
  var res = []

  for (var i = 0, arrayLen = array.length; i < arrayLen; i++) {
    var current = array[i]
    // res中不存在，则证明值唯一
    if (res.indexOf(current) < 0) {
      res.push(current)
    }
  }

  return res
}

// 排序后去重
function unique2(array) {
  var res = []
  var temp = array.sort()
  console.log(temp)
  for (var i = 0, arrayLen = temp.length; i < arrayLen; i++) {
    var current = array[i]
    // res中不存在，则证明值唯一
    if (res.indexOf(current) < 0) {
      res.push(current)
    }
  }
}

console.log(unique2(array))
