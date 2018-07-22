'use strict';
let DataModel = require('data-model');

exports.handler = (event, context, callback) => {
    console.log(event)
    let dataModel = new DataModel();
    dataModel.createGame(
        event,
        (err, result) => {
            if(err)  callback(null, JSON.stringify(err) );
            else callback(null, JSON.stringify(result) );
        }
    );
};