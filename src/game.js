import Player from "./player";

function Game() {
    let player1;
    let player2;
    let currentPlayer;
    let nextPlayer;
    
    function createPlayer(name, number) {
        return Player(name, number)
    }

    function newGame(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = this.player1;
        this.nextPlayer = this.player2
    }
    function changeTurn() {
        this.createPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
        this.nextPlayer = this.nextPlayer === this.player2 ? this.player1 : this.player2
    }
    function gameOver() {
        if (this.player1.gameboard.allShipsSunk()) return this.player2;
        if (this.player2.gameboard.allShipsSunk()) return this.player1;
    }
    return  {
        player1,
        player2,
        currentPlayer,
        nextPlayer,
        createPlayer,
        newGame,
        changeTurn,
        gameOver,
    }
}

export default Game