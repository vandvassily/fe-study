// 八皇后问题
let result = [];
class Queen {
    constructor(row){
        this.row = row

        this.cal8queens(row);
    }

    cal8queens(row){
        if(row === 8) {
            this.printQueens(result);
            return
        }

        for (let column = 0; column < 8; ++column) {
            if(this.isOk(row, column)) {
                result[row] = column
                this.cal8queens(row + 1)
            }
        }
    }

    isOk(row, column){
        let leftup = column - 1, rightup = column + 1;
        for (let i = row - 1; i >= 0; --i) {
            if(result[i] == column) return false;
            if (leftup >= 0) { // 考察左上对角线：第i行leftup列有棋子吗？
                if (result[i] == leftup) return false;
            }
            if (rightup < 8) { // 考察右上对角线：第i行rightup列有棋子吗？
                if (result[i] == rightup) return false;
            }
            --leftup; ++rightup;
        }

        return true
    }

    printQueens(result){
        console.log('/n')
        for (let row = 0; row < 8; ++row) {
            let log = '';
            for (let column = 0; column < 8; ++column) {
                if (result[row] == column) log +="Q ";
                else log+="* ";
            }
            console.log(log)
        }
    }
}


new Queen(0);