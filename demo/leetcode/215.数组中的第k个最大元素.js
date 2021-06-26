/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  return nums[quickSortC(nums, 0, nums.length - 1, nums.length - k)]
}

function quickSortC(arr, left, right, kIndex) {
  if (left >= right) return left

  const pivot = random(arr, left, right)

  if (pivot === kIndex) {
    return pivot
  } else {
    return pivot > kIndex
      ? quickSortC(arr, left, pivot - 1, kIndex)
      : quickSortC(arr, pivot + 1, right, kIndex)
  }
}

function random(arr, left, right) {
  var ran = Math.floor(Math.random() * (right - left + 1)) + left
  ;[arr[left], arr[ran]] = [arr[ran], arr[left]]
  return partition(arr, left, right)
}

function partition(arr, left, right) {
  const pivot = left
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

// @lc code=end
