const Song = require('../models/song');

module.exports = {
    create,
    index,
    deleteSong
}

async function create(req, res){
    console.log('we are here', req.body)
    try {
        const song = await Song.create({title: req.body.songTitle, artist: req.body.songArtist, user: req.user});
        res.status(201).json({song: song})
    } catch(err){
        console.log(err)
        res.json({data: err})
    }
}

async function index(req, res){
    try {
        const songs = await Song.find({}).populate('user').exec() 
        res.status(200).json({songs})
    } catch(err){

    }
}

async function deleteSong(req, res){
    console.log('we are here', req.body)
    try {
        const song = await Song.remove({title: req.body.songTitle, artist: req.body.songArtist, user: req.user});
        res.status(201).json({song: song})
    } catch(err){
        console.log(err)
        res.json({data: err})
    }
}