// 数字千分位
// 实现千分位分割
// 1123455754.22
// 1,123,455,754.22

let str = '1123123123.22';
/**
 * 数字千分位分割
 * @param {String} numStr 数字字符串
 * @return {String}
 */
function formatThousandString(numStr) {
    let [inte, deci] = numStr.split('.');
    const inteLen = inte.length;
    let startIndex = inteLen % 3;
    let res = numStr.slice(0, startIndex);

    while (startIndex < inteLen) {
        res += (res ? ',' : '') + numStr.slice(startIndex, (startIndex += 3));
    }

    return res + (deci ? '.' + deci : '');
}

console.log(formatThousandString(str));

function formatThousandRegex(numStr) {
    let [inte, deci] = numStr.split('.');
    console.log(inte)
    inte = inte.replace(/\d(?=(\d{3})+$)/g,'$&,');
    console.log(inte)
}

var str1 = '123456';
console.log(str1.replace(/\d(?=(\d{3})+$)/g,'$1,$2,'));


// formatThousandRegex(str)
