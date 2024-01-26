function ship() {
    const length = length;
    let hits = 0;
    function hit() {
        this.hits++
    }
    function isSunk() {
        if (this.hits >= this.length) return true
        else return false
    }
    return {
        length,
        hits,
        hit,
        isSunk
    }
}

export default ship