import Gameboard from "./gameboard";
import aiLogic from "./ai";

function Player(playerName, playerNumber) {
    let name = typeof playerName === 'string' ? playerName : 'ai';
    const number = playerNumber;
    const isAI = typeof playerName !== 'string' ? true  : false;
    const gameboard = Gameboard();
    const bot = aiLogic()
    function attack(opponent, row, col) {
        if (this.isAI) {
            // if (this.bot.availableAttacks.length === 0) return 'No squares to attack'
            [row, col] = this.bot.attack(opponent)
        }
        const result = opponent.gameboard.attacked(row, col)
        if (this.isAI) {
            if (result[0] === 'hit') {
                this.bot.lastHitArray.push(result[1]);
            }
        }
        return result
    }
    return {
        name,
        number,
        isAI,
        gameboard,
        attack,
        bot
    }
}
export default Player