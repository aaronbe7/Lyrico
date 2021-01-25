const mongoose = require('mongoose');


const songSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: String,
    artist: String,
  })
 

module.exports = mongoose.model('Song', songSchema);