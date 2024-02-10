import Game from './game';
import ShipTypes from './shipTypes';


const container = document.querySelector('#container');
document.body.appendChild(container);
const gameContainer = document.querySelector('#gameContainer');
container.appendChild(gameContainer);

const newGameButton = document.querySelector('.newGameButton');
// newGameButton.addEventListener('click', newGame);

const game = Game()

// function startGame(player1, player2) {
//     game.newGame(player1, player2)
//     drawGame()
// }

// function newGame() {
//     const newPlayer = game.creat
// }

function drawGame() {
    const player1BoardContainer = drawBoardContainer(game.player1);
    const player2BoardContainer = drawBoardContainer(game.player2);

    gameContainer.append(player1BoardContainer, player2BoardContainer)
}

function drawBoardContainer(player) {
    const boardContainer = document.createElement('div');
    boardContainer.classList.add('boardContainer');
    const playerName = document.createElement('h3');
    playerName.textContent = 'Your Ships';
    const playerBoard = drawBoard(player);
    boardContainer.append(playerName, playerBoard)
    return boardContainer
}

function drawBoard(player) {
    const board = document.createElement('div');
    board.classList.add('board');
    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.player = player ? player.number : 0;
            cell.dataset.row = row;
            cell.dataset.col = col;
            gameContainer.appendChild(board)
            board.appendChild(cell);
        }
    }
    return board
}
// drawBoard()
drawGame()
