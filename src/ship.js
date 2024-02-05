import shipTypes from "./shipTypes";

function Ship(shipType) {
    const type = shipType;
    const length = shipTypes[shipType].length;
    let hits = 0;
    let squares;
    let direction;
    function hit() {
        this.hits++
    }
    function isSunk() {
        if (this.hits >= this.length) return true
        else return false
    }
    return {
        type,
        length,
        hits,
        hit,
        isSunk,
        squares,
        direction
    }
}

export default Ship