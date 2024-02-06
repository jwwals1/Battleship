function aiLogic() {
    const availableAttacks = createAttackArray()
    const lastHitArray = []
    function attack(opponent) {
        for (let row = 0; row < 10; row++) {
            for (let col = 0; col < 10; col++) {
                const cell = opponent.gameboard.checkSquare(row, col);
                if (typeof cell === 'object' && cell !== null) {
                    return [row, col]
                }
            }
        }
        let attackCoords = this.getRandomCell(opponent);
        return attackCoords
    }
    function getRandomCell() {
        let arrayRow = Math.floor(Math.random() * this.availableAttacks.length);
        let arrayCol = Math.floor(Math.random() * this.availableAttacks[arrayRow].length);
        let cell = this.availableAttacks[arrayRow][arrayCol]
        
        return cell
    }
    return {
        availableAttacks,
        lastHitArray,
        attack,
        getRandomCell
    }
}


function createAttackArray() {
    const attackArray = [];
    for (let row = 0; row < 10; row++) {
        let rowArray = [];
        for (let col = 0; col < 10; col++) {
            rowArray.push([row, col]);
        }
        attackArray.push(rowArray)
    }
    return attackArray
}

export default aiLogic