/**
 * 将一天24小时按每半小划分成48段，我们用一个位图表示选中的时间区间，
 * 例如110000000000000000000000000000000000000000000000，
 * 表示第一个半小时和第二个半小时被选中了，其余时间段都没有被选中，
 * 也就是对应00:00~01:00这个时间区间。一个位图中可能有多个不连续的
 * 时间区间被选中，例如110010000000000000000000000000000000000000000000，
 * 表示00:00-1:00和02:00-02:30这两个时间区间被选中了。
 *
 * 要求：写一个函数timeBitmapToRanges，将上述规则描述的时间位图转换成一个选中时间区间的数组。
 * 示例输入："110010000000000000000000000000000000000000000000"
 * 示例输出：["00:00~01:00", "02:00~02:30"]
 */

function timeBitmapToRanges(timeStr = '') {
    // 当前值为1的时候，判断前一个值是否是0，是的话，则新增一个开头，否则跳入下一个环节
    // 当前值为0的时候，判断前一个值是否是1，如果是1则取出前一个值，拼接结尾，否则进入下一个环节
    // 结尾的情况，可以考虑使用哨兵模式，多添加一个0
    const arr = (timeStr + '0').split('');
    return arr.reduce((prev, curr, index, arr) => {
        const prevVal = index > 0 ? arr[index - 1] : '0';
        if (curr === '1') {
            if (prevVal === '0') {
                prev.push(computeTime(index));
            }
        } else {
            if (prevVal === '1') {
                const prevRes = prev[prev.length - 1];
                prev[prev.length - 1] = prevRes + '~' + computeTime(index);
            }
        }

        return prev;
    }, []);
}

function computeTime(index) {
    const hours = Math.ceil((index - 1) / 2);
    return (hours < 10 ? '0' + hours : hours) + ':' + (index % 2 === 0 ? '00' : '30');
}

console.log(timeBitmapToRanges('110000000000000000000000000000000000000000000000'));
