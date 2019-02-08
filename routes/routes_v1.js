const express = require('express');
const router = express.Router();
const steamRepo = require('../data/steamRepo');

router.get('/', (req, res) => {
    steamRepo.getAllGames("Chetherebel");
    res.render('../views/homepage.ejs')
});

module.exports = router;