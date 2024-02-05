import Ship from './ship'
import shipTypes from './shipTypes';

function Gameboard() {
    const board = createGameboard()
    const placedShips = []
    function createGameboard() {
        let gameboardArray = []
        for (let row = 0; row < 10; row++) {
            let rowArray = [];
            for (let col = 0; col < 10; col++) {
                rowArray[col] = null;
            }
            gameboardArray[row] = rowArray
        }
        return gameboardArray
    }
    function clearBoard(board) {
        for (let row = 0; row < 10; row++) {
            for (let col = 0; col <10; col++) {
                board[row][col] = null
            }
        }
    }

    function checkSquare(row, col) {
        if (row < 0 || col < 0) return undefined
        if (row > 9 || col > 9) return undefined
        else return this.board[row][col]
    }
    function checkPlacement(shipLength, location, direction) {
        let [row, col] = location
        let shipSquares = [];
        for (let i = 0; i < shipLength; i++) {
            shipSquares.push([row, col]);
            direction === 'horizontal' ? col++ : row++
        }
        const validPlacement = shipSquares.every(square => {
            let [row, col] = square;
            if (this.checkSquare(row, col) === undefined) return false;
            return this.board[row][col] === null;
        })
        return {
            isVaild: validPlacement,
            squares: shipSquares
        }
    }
    function shipPlacement(shipType, location, direction) {
        const shipLength = shipTypes[shipType].length;
        const shipSquares = this.checkPlacement(shipLength, location, direction);
        if (shipSquares.isVaild) {
            const ship = Ship(shipType);
            ship.squares = shipSquares.squares;
            ship.direction = direction;
            shipSquares.squares.forEach(square => {
                let [row, col] = square;
                this.board[row][col] = ship
            })
            placedShips.push(ship);
            return ship
        } else return "Not valid ship placement" }
    function attacked(row, col) {
        if (this.checkSquare === undefined) return "Select Valid Location";
        const attackedShip = this.board[row][col];
        if (attackedShip === null) this.board[row][col] = 'miss'
        else {
            attackedShip.hit();
            this.board[row][col] = 'hit'
        }
        return [this.board[row][col], [row, col], attackedShip]
    }
    function allShipsSunk() {
        return placedShips.every(ship => ship.isSunk())
    }
    return {
    board,
    checkSquare,
    shipPlacement,
    checkPlacement,
    placedShips,
    attacked,
    allShipsSunk,
    clearBoard
    }
}

export default Gameboard