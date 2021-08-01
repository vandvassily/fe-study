// 0-1背包问题

let maxW = 0;

/**
 * 
 * @param {*} i 表示考察到哪个物品了
 * @param {*} cw 表示当前已经装进去的物品的重量和
 * @param {*} items 表示每个物品的重量
 * @param {*} n 表示物品个数
 * @param {*} w 背包重量
 */
function cal(i, cw, items, n, w) {
    if (cw == w || i == n) { // cw==w 表示装满了 ;i==n 表示已经考察完所有的物品
        if (cw > maxW) maxW = cw;
        return;
    }
    cal(i + 1, cw, items, n, w); //当前物品不装进背包
    if (cw + items[i] <= w) {// 已经超过可以背包承受的重量的时候，就不要再装了
        cal(i + 1, cw + items[i], items, n, w); //当前物品装进背包
    }
}

let arr = [1, 2, 3, 4, 5, 6, 10, 12]

cal(0, 0, arr, 5, 20)
console.log(maxW);
