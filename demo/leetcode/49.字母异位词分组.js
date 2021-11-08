/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// 1. 迭代，每一个元素进行排序
// 2. 放入到对应的map中，如果存在，则添加到对应value的数组中
// 3. 没有，则返回数组中再新增一个值，并保存到对应的map中
// 4. 迭代完成后，返回结果数组

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs = []) {
    const ret = [];
    const map = {};
    for (let i = 0; i < strs.length; i++) {
        const element = strs[i];
        let arr = element.split('')
        arr.sort(function(s, t) {
            var a = s.toLowerCase();
            var b = t.toLowerCase();
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        })
        const temp = arr.join('')
        if(typeof map[temp] === 'undefined') {
            const index = ret.push([element])
            map[temp] = index - 1
        }
        else {
            ret[map[temp]].push(element)
        }
    }

    return ret;
};

// @lc code=end

