const express = require('express');
const router = express.Router();
const songsCtrl = require('../../controllers/songs');
// /*---------- Public Routes ----------*/
router.post('/', songsCtrl.create);
router.get('/', songsCtrl.index)
router.delete('/songs/:id', songsCtrl.deleteSong)


/*---------- Protected Routes ----------*/




module.exports = router;