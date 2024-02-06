import Player from "./player";
import Gameboard from "./gameboard";

let player1
let ai1


beforeEach(() => {
    let gameboard = Gameboard()
    player1 = Player('Joe');
    ai1 = Player(false)
    player1.gameboard.shipPlacement('carrier', [1,1], 'horizontal');
    ai1.gameboard.shipPlacement('carrier', [6,1], 'horizontal');
})

test('player1 attacks and misses', () => {
    expect(ai1.gameboard.checkSquare(9,9)).toBe(null);
    const attackedSquare = player1.attack(ai1, 9,8);
    expect(attackedSquare[0]).toBe('miss')
})

test('player1 attacks and hits', () => {
    expect(ai1.gameboard.checkSquare(9,9)).toBe(null);
    const attackedSquare = player1.attack(ai1, 6, 1);
    expect(attackedSquare[0]).toBe('hit')
})


test('ai1 make a random attack', () => {
    let gameboard = Gameboard()
    const attackedSquare = ai1.attack(player1);
    expect(typeof attackedSquare[0]).toBe('string');
    // expect(ai1.attack(gameboard)).not.toBeNull();
})