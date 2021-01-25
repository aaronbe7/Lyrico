const mongoose = require('mongoose');


const songSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId },
    title: String,
    artist: String,
  })
 

module.exports = mongoose.model('Song', songSchema);