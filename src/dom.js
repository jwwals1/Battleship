import ShipTypes from "./shipTypes";
// import {carrier, battle} from "./shipTypes"

const optionContainer = document.querySelector('.option-container')
const flipButton = document.querySelector('#flip-button')
const gamesBoardContainer = document.querySelector('#gamesboard-container')


let degree = 0;
function flip() {
    const optionShips = Array.from(optionContainer.children)
    if (degree === 0) {
        degree = 90
    } else {
        degree = 0
    }
    optionShips.forEach(optionShip => optionShip.style.transform = `rotate(${degree}deg)`)
}

flipButton.addEventListener('click', flip)


function createBoard(player) {
    const gameBoardContainer = document.createElement('div');
    gameBoardContainer.classList.add('game-board')
    gameBoardContainer.id = player
    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col ++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = row;
            cell.dataset.col = col;
            gamesBoardContainer.appendChild(gameBoardContainer)
            gameBoardContainer.appendChild(cell)
        }
    }
    return gameBoardContainer
}


// function createBoard(color, user) {
//     const gameBoardContainer = document.createElement('div');
//     gameBoardContainer.classList.add('game-board')
//     gameBoardContainer.style.backgroundColor = color
//     gameBoardContainer.id = user

//     for (let i = 0; i < 100; i++) {
//         const block = document.createElement('div')
//         block.classList.add('block');
//         block.id = i
//         gameBoardContainer.append(block)
//     }
    
//     gamesBoardContainer.append(gameBoardContainer)
// }



// function addShipPiece() {

// }

createBoard('player')
createBoard('computer')

