import Game from './game';

let game;
let player1;
let ai1;

beforeEach(() => {
    game = Game();
    player1 = game.createPlayer('Joe', 1);
    ai1 = game.createPlayer(false, 2);
    game.newGame(player1, ai1)
})

test('create game', () => {
    expect(game.player1.isAI).toBe(false);
    expect(game.player2.isAI).toBe(true)
})

test('players can make attacks', () => {
    expect(typeof player1.attack(ai1, 0,0)[0]).toBe('string')
    expect(typeof player1.attack(player1, 0,0)[0]).toBe('string')
})