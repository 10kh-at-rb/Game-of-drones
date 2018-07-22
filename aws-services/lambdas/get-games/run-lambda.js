let lambda = require('./index');
let event = {};

lambda.handler(event, {}, (err, response) => {
    if(err) console.log(err);
    else console.log(response);
});