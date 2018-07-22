import Player from '../player';
import Human from '../human';
import RulesEngine from '../rules-engine';

class GameEngine {
    
    constructor() {
        this.playerOne = new Human();
        this.playerTwo = new Human();
        this.rulesEngine = new RulesEngine();
    }

    setPlayerOneName(name) {
        this.playerOne.setName(name);
    }

    setPlayerTwoName(name) {
        this.playerTwo.setName(name);
    }

    makeMove(playOne, playTwo) {
        return this.rulesEngine.makeMove(playOne, playTwo);
    }

    getGameState() {
        return {
            playerOne: this.playerOne,
            playerTwo: this.playerTwo,
            state: this.state
        }
    }
}


export default GameEngine;