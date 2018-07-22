let DataModel = require('./index');
let dataModel = new DataModel();

/*
dataModel.createGame(
    {
        playerOneName : 'Jhon', 
        playerTwoName : 'Juan', 
        playerOneScore : 2, 
        playerTwoScore : 1, 
        winner: 'Jhon'
    }
    ,
    (err, obj) => {
        if(err) console.log(err);
        else console.log(obj);
    }
);
*/

dataModel.getGames((err, obj) => {
    if(err) console.log(err);
    else console.log(obj);
});
