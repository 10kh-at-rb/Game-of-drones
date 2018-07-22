class Services {
    constructor() {
        this.API_URL = "https://gn85979bjc.execute-api.us-east-1.amazonaws.com/dev/";
        
    }

    getGames(callback) {
        
        fetch(this.API_URL + 'game/', {
            method: 'get',
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log('data', data);
            callback(null, data);
        });
    }

    addGame(game, callback) {

        fetch(this.API_URL + 'game/', {
            method: 'post',
            body: JSON.stringify(game),
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log('data', data);
            callback(null, data);
        });
    }
   
}

export default Services;