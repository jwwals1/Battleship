import Gameboard from "./gameboard";

let gameboard

beforeEach(() => {
    gameboard = Gameboard()
})

test('check vaild squares', () => {
    expect(gameboard.checkSquare(1,1)).toBe(null);
    expect(gameboard.checkSquare(20,20)).toBe(undefined);
})

test('ship location horizontal',() => {
    const carrier = gameboard.shipPlacement('carrier', [1,1], 'horizontal')
    expect(gameboard.checkSquare(1,1)).toBe(carrier)
    expect(gameboard.checkSquare(1,2)).toBe(carrier)
    expect(gameboard.checkSquare(2,1)).toBe(null)
    expect(gameboard.checkSquare(9,9)).toBe(null)
})

test('ship location vertically',() => {
    const carrier = gameboard.shipPlacement('carrier', [1,1], 'vertical')
    expect(gameboard.checkSquare(1,1)).toBe(carrier)
    expect(gameboard.checkSquare(1,2)).toBe(null)
    expect(gameboard.checkSquare(2,1)).toBe(carrier)
    expect(gameboard.checkSquare(9,9)).toBe(null)
})

test('record a hit increases', () => {
    const carrier = gameboard.shipPlacement('carrier', [1,1], 'horizontal')
    gameboard.attacked(1,1);
    expect(gameboard.checkSquare(1,1)).toBe('hit')
    expect(gameboard.checkSquare(9,9)).toBe(null)
    expect(carrier.hits).toBe(1)
})

test('record a miss', () => {
    const carrier = gameboard.shipPlacement('carrier', [1,1], 'horizontal');
    gameboard.attacked(9,9);
    expect(gameboard.checkSquare(9,9)).toBe('miss')
})

test('report ship sunk', () => {
    const submarine = gameboard.shipPlacement('submarine', [1,1], 'horizontal');
    gameboard.attacked(1,1);
    expect(submarine.isSunk()).toBe(false);
    gameboard.attacked(1,2);
    expect(submarine.isSunk()).toBe(false);
    gameboard.attacked(1,3);
    expect(submarine.isSunk()).toBe(true)

})

test('all ships sunk', () => {
    const submarine = gameboard.shipPlacement('submarine', [1,1], 'horizontal');
    const destroyer = gameboard.shipPlacement('destroyer', [6,1], 'horizontal');
    gameboard.attacked(1,1);
    gameboard.attacked(1,2);
    gameboard.attacked(1,3);
    expect(gameboard.allShipsSunk()).toBe(false)
    gameboard.attacked(6,1)
    gameboard.attacked(6,2);
    expect(gameboard.allShipsSunk()).toBe(true)
})