const User = require('../models/user');
const Song = require('../models/song');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
  signup,
  login,
  library
};

async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
    const token = createJWT(user);
    console.log('try signup controller', user, token)
    res.json({ token });
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}

async function login(req, res) {
  console.log(req.body)
  try {
    const user = await User.findOne({email: req.body.email});
    console.log(user, ' this user', !user, !!user)
    if (!user) return res.status(401).json({err: 'bad credentials'});
    user.comparePassword(req.body.pw, (err, isMatch) => {
      
      if (isMatch) {
        const token = createJWT(user);
        res.json({token});
      } else {
        return res.status(401).json({err: 'bad credentials'});
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

async function library(req, res) {
  try {
    const user = await User.findOne({username: req.params.username})
    const songs = await Song.find({user: user._id});
    res.status(200).json({songs:songs, user: user})
  } catch(err){
    return res.status(401).json(err)
  }
}

/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    {user}, // data payload
    SECRET,
    {expiresIn: '24h'}
  );
}
