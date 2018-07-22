let lambda = require('./index');
let event = {
    playerOneName : 'Pedro', 
    playerTwoName : 'Juan', 
    playerOneScore : 2, 
    playerTwoScore : 1, 
    winner: 'Pedro'
};

lambda.handler(event, {}, (err, response) => {
    if(err) console.log(err);
    else console.log(response);
});