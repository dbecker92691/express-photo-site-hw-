const mongoose = require('mongoose');


const photoSchema = new mongoose.Schema({
    photo: String,
});

module.exports = mongoose.model('Photo', photoSchema);