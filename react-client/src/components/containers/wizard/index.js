import React, { Component } from 'react';
import GameEngine from '../../game-components/game-engine';
import Services from '../../../services';

class Wizard extends Component {

    constructor(props) {
        super(props);
        /*
            step 1: selecting rival
            step 2: writing names
            step 3: playing the game
        */

        this.services = new Services();

        this.currentPlay = false;
        this.playOne = false;
        this.playTwo = false;
        this.round = 1;
        this.playerPlaying = 1;
            

        this.state = {
            isWarningMessage: false,
            warningMessage: '',
            currentStep: 1,
            playerPlaying:1,
            round: 1,
            showPlayButton: false,
            isPlayButton: true,
            scoreRound1: {
                    playOne: '',
                    playTwo: '',
                    playWinner: '',
                    playerWinner: ''
            },
            scoreRound2: {
                playOne: '',
                playTwo: '',
                playWinner: '',
                playerWinner: ''
            },
            scoreRound3: {
                playOne: '',
                playTwo: '',
                playWinner: '',
                playerWinner: ''
            },
            playerWinner: '',
            isWinner: false
        }

        this.gameEngine = new GameEngine();
    }

    renderStepOne() {
        return(
            <div>
                <div class="row justify-content-md-center">
                    <div class="col  col-lg-8">
                        <div class="alert alert-success" role="alert">
                            <h4 class="alert-heading">Games rules</h4>
                            <p>A player who decides to play rock will beat another player who has chosen scissors ("rock crushes scissors" or sometimes "blunts scissors"), but will lose to one who has played paper ("paper covers rock"); a play of paper will lose to a play of scissors ("scissors cuts paper").</p>
                            <hr/>
                            <p class="mb-0">Against who do you want to play?</p>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-md-center">
                    <div class="col  col-lg-4">
                        <button type="button" class="btn btn-outline-primary btn-lg btn-block"
                            onClick={
                                (event) => {
                                    this.setState({isWarningMessage:false});
                                    this.setState({currentStep:2});
                                }
                            }
                        >Human</button>
                    </div>
                    <div class="col  col-lg-4">
                        <button type="button" class="btn btn-outline-warning btn-lg btn-block"
                        onClick={
                            ()=> {
                                this.setState({isWarningMessage:true, warningMessage:'This feature wil be available soon'});
                            }
                        }>Machine</button>
                    </div>
                </div>
                {this.renderWarningMessage()}
            </div>
        )
    }

    renderStepTwo() {
        return(
            <div>
                <div class="row justify-content-md-center">
                        <div class="col  col-lg-8">
                            <div class="alert alert-success" role="alert">
                                <h4 class="alert-heading">Games rules</h4>
                                <p>A player who decides to play rock will beat another player who has chosen scissors ("rock crushes scissors" or sometimes "blunts scissors"), but will lose to one who has played paper ("paper covers rock"); a play of paper will lose to a play of scissors ("scissors cuts paper").</p>
                                <hr/>
                                <p class="mb-0">Please enter the players names</p>
                            </div>
                        </div>
                    </div>
                <div class="row justify-content-md-center">
                    <div class="col-lg-4 col-sm-8 col-xs-8">
                        <form>
                            <div class="form-group">
                                <label for="exampleTextarea" class="bmd-label-floating">Please enter the player's one name</label>
                                <textarea class="form-control" id="exampleTextarea" rows="1"
                                    onChange = {
                                        (event) => {
                                            this.gameEngine.setPlayerOneName(event.target.value);
                                        }
                                    }
                                ></textarea>
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-4 col-sm-8 col-xs-8">
                        <form>
                            <div class="form-group">
                                <label for="exampleTextarea" class="bmd-label-floating">Please enter the player's two name</label>
                                <textarea class="form-control" id="exampleTextarea" rows="1"
                                    onChange = {
                                        (event) => {
                                            this.gameEngine.setPlayerTwoName(event.target.value);
                                        }
                                    }
                                ></textarea>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row justify-content-md-center">
                    <div class="col  col-lg-4">
                        <form>
                            <button type="submit" class="btn btn-primary btn-raised btn-block"
                                onClick={
                                    (event) => {
                                        console.log(this.gameEngine.getGameState());
                                        if(this.gameEngine.getGameState().playerOne.getName() === '' || this.gameEngine.getGameState().playerTwo.getName() === '') {
                                            this.setState({warningMessage:'please enter the names', isWarningMessage:true})
                                        } else {
                                            this.setState({isWarningMessage:false})
                                            this.setState({currentStep:3});
                                        }
                                    }
                                }
                            >WE ARE READY !!!</button>
                        </form>
                    </div>
                </div>
                {this.renderWarningMessage()}
            </div>
        )
    }

    play(playOne = false, playTwo = false) {
        console.log(`play one ${playOne}, play two ${playTwo}`);
        if(playOne && playTwo) {

            let result = this.gameEngine.makeMove(playOne, playTwo);
            console.log('result', result);
            let playerWinner;

            if(playOne === result) {
                console.log('one')
                playerWinner = this.gameEngine.getGameState().playerOne.name;
            } else if(playTwo === result) {
                console.log('two')
                playerWinner = this.gameEngine.getGameState().playerTwo.name;
            } else {
                playerWinner = 'none'
            }
            

            
            console.log('plays completed');
            switch (this.round) {
                case 1:
                    console.log('round 1');
                    this.round = 2;
                    this.setState({round: 2});
                        
                    
                    this.setState(
                        {
                            scoreRound1: {
                                    playOne: playOne,
                                    playTwo: playTwo,
                                    playWinner: this.gameEngine.makeMove(playOne, playTwo),
                                    playerWinner: playerWinner
                                }
                        }
                    )
                    this.playOne = this.playTwo = false;
                    break;
                case 2:
                    
                    console.log('round 2');
                    this.setState({round: 3});
                    this.round = 3;
                    this.setState(
                        {
                            scoreRound2: {
                                playOne: playOne,
                                playTwo: playTwo,
                                playWinner: this.gameEngine.makeMove(playOne, playTwo),
                                playerWinner: playerWinner
                            }
                        }
                    )
                    this.playOne = this.playTwo = false;
                    break;
                case 3:
                    this.setState({isPlayButton: false})
                    console.log('round 3');
                    this.setState(
                        {
                            scoreRound3: {
                                playOne: playOne,
                                playTwo: playTwo,
                                playWinner: this.gameEngine.makeMove(playOne, playTwo),
                                playerWinner: playerWinner
                            }
                        }, () => {
                            this.calculateWinner();
                        }
                    )
                    break;
                default:
                    break;
            }
        }
    }

    resetGame() {

        this.currentPlay = false;
        this.playOne = false;
        this.playTwo = false;
        this.round = 1;
        this.playerPlaying = 1;
        this.setState({
            isWarningMessage: false,
            warningMessage: '',
            currentStep: 1,
            playerPlaying:1,
            round: 1,
            showPlayButton: false,
            isPlayButton: true,
            scoreRound1: {
                    playOne: '',
                    playTwo: '',
                    playWinner: '',
                    playerWinner: ''
            },
            scoreRound2: {
                playOne: '',
                playTwo: '',
                playWinner: '',
                playerWinner: ''
            },
            scoreRound3: {
                playOne: '',
                playTwo: '',
                playWinner: '',
                playerWinner: ''
            },
            playerWinner: '',
            isWinner: false
        })
    }

    calculateWinner() {

        this.setState({isWinner: true});
        let playerOne = {
            name: this.gameEngine.getGameState().playerOne.name,
            score: 0
        }
        let playerTwo = {
            name: this.gameEngine.getGameState().playerTwo.name,
            score: 0
        }
        let gameScore = [];
        gameScore.push(this.state.scoreRound1, this.state.scoreRound2, this.state.scoreRound3);

        gameScore.forEach(score => {
            if(score.playerWinner === playerOne.name) {
                playerOne.score = playerOne.score + 1;
            } else if(score.playerWinner === playerTwo.name) {
                    playerTwo.score = playerTwo.score + 1;
                }
        });

        let playerWinner;

        if(playerOne.score === playerTwo.score) {
            playerWinner = 'draw';
            this.setState({playerWinner: 'draw'})
        } else if(playerOne.score > playerTwo.score) {
            playerWinner = playerOne.name;
            this.setState({playerWinner: playerOne.name})
        } else {
            playerWinner = playerTwo.name;
            this.setState({playerWinner: playerTwo.name})
        }
        console.log(gameScore);
        console.log(playerOne);
        console.log(playerTwo);

        let body = {
            playerOneName : playerOne.name, 
            playerTwoName : playerTwo.name, 
            playerOneScore : playerOne.score, 
            playerTwoScore : playerTwo.score, 
            winner: playerWinner
        }

        this.services.addGame(body, (err, result) => {
            console.log(result);
        })
        
    }

    renderStepThree() {
        return(
            <div>
                <div class="row justify-content-md-center">
                    <div class="col  col-lg-8">
                        <div class="alert alert-success" role="alert">
                            <h4 class="alert-heading">Round {this.state.round}</h4>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-md-center">
                    <div class="col-lg-4 col-sm-12 col-xs-12">
                        <div class="alert alert-dark" role="alert">
                            Turn of player {this.state.playerPlaying}, make your move
                        </div>
                        <button type="button" class="btn btn-outline-secondary btn-lg btn-block"
                            onClick={
                                () => {
                                    this.currentPlay = 'rock';
                                    this.setState({showPlayButton: true});
                                }
                            }
                        >Rock</button>
                        <button type="button" class="btn btn-outline-secondary btn-lg btn-block"
                            onClick={
                                () => {
                                    this.currentPlay = 'paper';
                                    this.setState({showPlayButton: true});
                                }
                            }
                        >Paper</button>
                        <button type="button" class="btn btn-outline-secondary btn-lg btn-block"
                            onClick={
                                () => {
                                    this.currentPlay ='scissor';
                                    this.setState({showPlayButton: true});
                                }
                            }
                        >Scissor</button>
                        {
                            this.state.showPlayButton ?
                            <button type="button" class="btn btn-outline-primary btn-lg btn-success btn-block" disabled={!this.state.isPlayButton} onClick={ 
                                (event) => {
                                    
                                    !this.playOne ? this.playOne = this.currentPlay: this.playTwo = this.currentPlay;
                                    this.setState({showPlayButton:false});
                                    if(this.playOne) {
                                        this.playerPlaying = 2;
                                        this.setState({playerPlaying: 2})
                                    }
    
                                    if(this.playOne && this.playTwo) {
                                        this.playerPlaying = 1;
                                        this.setState({playerPlaying: 1})
                                        this.play(this.playOne, this.playTwo);

                                    }
                                }
                                }>PLAY</button> : ''
                        }

                        {   
                            this.state.isWinner ?
                            <div>
                                <div class="alert alert-info" role="alert">
                                    <h4 class="alert-heading">PLAYER WINNER: {this.state.playerWinner} </h4>
                                </div>
                                <button type="button" class="btn btn-outline-success btn-lg btn-block"
                                            onClick={ ()=>{
                                                this.resetGame();
                                            }}
                                        >Play again
                                </button>
                            </div>
                            : ''
                            
                        }
                        
                    </div>
                    <div class="col-lg-4 col-sm-12 col-xs-12">
                        <div class="alert alert-success" role="alert">
                            <h4 class="alert-heading">Score</h4>
                            <hr/>
                            <h4 class="alert-heading">Round 1</h4>
                            <p>Play Player One: {this.state.scoreRound1.playOne}</p>
                            <p>Play Player Two: {this.state.scoreRound1.playTwo}</p>
                            <p>Play Winner: {this.state.scoreRound1.playWinner}</p>
                            <p>Player Winner: {this.state.scoreRound1.playerWinner}</p>
                            <h4 class="alert-heading">Round 2</h4>
                            <p>Play Player One: {this.state.scoreRound2.playOne}</p>
                            <p>Play Player Two: {this.state.scoreRound2.playTwo}</p>
                            <p>Play Winner: {this.state.scoreRound2.playWinner}</p>
                            <p>Player Winner: {this.state.scoreRound2.playerWinner}</p>
                            <h4 class="alert-heading">Round 3</h4>
                            <p>Play Player One: {this.state.scoreRound3.playOne}</p>
                            <p>Play Player Two: {this.state.scoreRound3.playTwo}</p>
                            <p>Play Winner: {this.state.scoreRound3.playWinner}</p>
                            <p>Player Winner: {this.state.scoreRound3.playerWinner}</p>
                        </div>
                    </div>
                </div> 
                
            </div>    
        )
    }

    renderWarningMessage() {
        return (
            this.state.isWarningMessage ?
                <div class="row justify-content-md-center">
                    <div class="col  col-lg-8">
                        <div class="alert alert-danger" role="alert">
                            <h3>{this.state.warningMessage}</h3>
                        </div>
                    </div>
                </div>
                : ''
        )
    }

    renderStep() {
        switch (this.state.currentStep) {
            case 1:
                return this.renderStepOne();
                break;
            case 2:
                return this.renderStepTwo();
                break;
            case 3:
            return this.renderStepThree();
            break;
            default:
                break;
        }
    }
    
    render() {
        return this.renderStep();
    }
}

export default Wizard;