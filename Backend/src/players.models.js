const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const PlayerSchema = new Schema({
    ranking: Number,
    name: String,
    age: Number,
    position: String,
    team: String,
    totalGoals: Number,
    totalMatches: Number,
    profile: String
});

module.exports = mongoose.model('players', PlayerSchema);