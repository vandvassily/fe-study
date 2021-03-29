console.log('嵌套对象');
// 有一个嵌套层次很深的对象，key 都是 a_b 形式 ，需要改成 ab 的形式，注意不能用递归。

const a = {
  a_y: {
    a_z: {
      y_x: 6
    },
    b_c: 1
  }
}
// {
//   ay: {
//     az: {
//       yx: 6
//     },
//     bc: 1
//   }
// }

function changeObjectProperty(obj) {
    let reg = new RegExp(/("\w+)_(\w+":)/g);
    return JSON.parse(JSON.stringify(obj).replace(reg, '$1$2'))
}

console.log(changeObjectProperty(a));

/**
 * 大数相加
 * @param {string} a 
 * @param {string} b 
 * @return {string}
 */
function bigNumberSum(a, b) {
    return (BigInt(a) + BigInt(b)).toString()
}