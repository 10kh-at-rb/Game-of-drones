const mongoose = require('mongoose');
const uuid = require('node-uuid');
require('mongoose-uuid2')(mongoose);
const UUID = mongoose.Types.UUID;

const gameSchema = mongoose.Schema({
    _id: { type: UUID, default: uuid.v4 },
    playerOneName: String,
    playerTwoName: String,
    playerOneScore: Number,
    playerTwoScore: Number,
    winner: String,
    date: {
        type: Date,
        // `Date.now()` returns the current unix timestamp as a number
        default: Date.now
      }
    

}, { id: false });

gameSchema.set('toObject', {getters: true});
gameSchema.set('toJSON', {getters: true});

const Game = mongoose.model('Game', gameSchema);

exports.Game = Game;