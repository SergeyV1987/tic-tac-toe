class TicTacToe {
    constructor() {
        this.currentPlayer = 'x';
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.lastMove = null;
        this.winner = null;
        this.noTurns = false;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.currentPlayer === 'x') {
            if (this.field[rowIndex][columnIndex] === null) {
                this.field[rowIndex][columnIndex] = this.currentPlayer;
                this.lastMove = this.currentPlayer;
                this.currentPlayer = 'o';
            }
        } else {
            if (this.field[rowIndex][columnIndex] === null) {
                this.field[rowIndex][columnIndex] = this.currentPlayer;
                this.lastMove = this.currentPlayer;
                this.currentPlayer = 'x'
            }
        }


        if (!this.field.some(row => row.some(e => e === null))) {
            this.noTurns = true;
        }

        if (this.field[0][0] === this.lastMove && this.field[0][1] === this.lastMove && this.field[0][2] === this.lastMove
            || this.field[1][0] === this.lastMove && this.field[1][1] === this.lastMove && this.field[1][2] === this.lastMove
            || this.field[2][0] === this.lastMove && this.field[2][1] === this.lastMove && this.field[2][2] === this.lastMove
            || this.field[0][0] === this.lastMove && this.field[1][0] === this.lastMove && this.field[2][0] === this.lastMove
            || this.field[0][1] === this.lastMove && this.field[1][1] === this.lastMove && this.field[2][1] === this.lastMove
            || this.field[0][2] === this.lastMove && this.field[1][2] === this.lastMove && this.field[2][2] === this.lastMove
            || this.field[0][0] === this.lastMove && this.field[1][1] === this.lastMove && this.field[2][2] === this.lastMove
            || this.field[0][2] === this.lastMove && this.field[1][1] === this.lastMove && this.field[2][0] === this.lastMove) {
            this.winner = this.lastMove
        }


    }

    isFinished() {
        return this.winner !== null || this.noTurns;
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        return this.noTurns;
    }

    isDraw() {
        return this.winner === null && this.noTurns
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex]
    }
}

module.exports = TicTacToe;
