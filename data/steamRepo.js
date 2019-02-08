const express = require('express');
const router = express.Router();
const request = require('request');
const apiKEY = process.env.STEAM_API_KEY;

module.exports = class SteamRepo {

    static getAllGames(steamID) {
        let apiURL =  'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=' + apiKEY + '&steamid=' + steamID + '&format=json';
        console.log(apiURL);
    }

};