'use strict';
let DataModel = require('data-model');

exports.handler = (event, context, callback) => {
    
    let dataModel = new DataModel();
    dataModel.getGames((err, result) => {
        if(err)  callback(null, JSON.stringify(err) );
        else callback(null, JSON.stringify(result) );
    });
};