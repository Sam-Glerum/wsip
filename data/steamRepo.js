const express = require('express');
const router = express.Router();
const request = require('request');
const http = require('http');
const apiKEY = process.env.STEAM_API_KEY;

module.exports = class SteamRepo {

    static getUser(steamID) {
        return true;
    }
    static getAllGames(steamID) {
        // Set URL to execute GET request on
        let apiURL =  'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=' + apiKEY + '&steamid=' + steamID + '&format=json';

        // Initialize empty list for storing retrieved games
        let gameList = [];
        
        // Setup options for get request
        let options = {
            hostname: apiURL
        }

        // Call the Steam API
        http.get(options, (res) => {
            // Loop through the result
            for (let game of res) {
                // Add all found games to the gameList
                gameList.push(game);
            }
        });

        // Return the filled gamelist
        return gameList;
    }

};