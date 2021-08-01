// 请实现一个大数相加函数，比如说 1111111111111111111 + 1，直接数字相加答案是错误的。

// 另请说明为什么在 JS 会存在这样的问题？

/**
 * 大数相加
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function bigNumberSum(a, b) {
    return (BigInt(a) + BigInt(b)).toString();
}
