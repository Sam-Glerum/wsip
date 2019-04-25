const express = require('express');
const router = express.Router();
const steamRepo = require('../data/steamRepo');
const steam = require('../steam');

router.get('/', (req, res) => {
    // steamRepo.getAllGames("Chetherebel");
    res.send("Welcome to the WSIP API");
});

router.get('/getSteamListFromOwner/:steamID', (req, res) => {
    // Get steamID from URL
    let steamID = req.params.steamID;
    
    // Check if user exists
    // if (!steamRepo.getUser()) {
    //     res.status(404).send("SteamID does not exist")
    // }

    // Call steamRepo method to retrieve all games and store it in variable
    // let listOfGames = steamRepo.getAllGames(steamID);
    steam.getListOfSteamGames(steamID);
    console.log(listOfGames);
    // Send the list of games in the response
    res.status(200).json(listOfGames);

    
    
})

module.exports = router;