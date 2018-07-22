class RulesEngine {

    // options must be rock, scissor or paper 
    makeMove(optionOne, OptionTwo) {

        if( (optionOne === 'rock' && OptionTwo === 'scissor') || (optionOne === 'scissor' && OptionTwo === 'rock') ) return 'rock';
        if( (optionOne === 'rock' && OptionTwo === 'paper') || (optionOne === 'paper' && OptionTwo === 'rock') ) return 'paper';
        if( (optionOne === 'paper' && OptionTwo === 'scissor') || (optionOne === 'scissor' && OptionTwo === 'paper') ) return 'scissor';
        if(  optionOne === OptionTwo) return 'draw';
        return 'invalid';
    }

}

export default RulesEngine;