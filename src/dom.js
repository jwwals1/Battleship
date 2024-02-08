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

const width = 10

function createBoard(color) {
    const gameBoardContainer = document.createElement('div');
    gameBoardContainer.classList.add('game-board')
    gameBoardContainer.style.backgroundColor = color
    
    gamesBoardContainer.append(gameBoardContainer)
}

createBoard('yellow')
createBoard('pink')

flipButton.addEventListener('click', flip)