const env = require('dotenv').config();
const api_key = env.STEAM_API_KEY;
console.log("versie: " +api_key);


// Set the value of the input field to an empty string when a user clicks the field
function removeFieldValue() {
    $('#steamID_input').val("");
}

function showSelectedGame() {

}

function getListOfSteamGames() {
    let steamID = $('#steamID_input').val();

    $.ajax ({
        url: 'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=' + api_key + '&steamid=' + steamID + '&format=json',
        dataType: 'JSON',

        succes: function(data) {
            console.log(data)
        },
        error: function(data) {
            console.log("Error");
        }
    })
}