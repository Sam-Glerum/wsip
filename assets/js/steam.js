// let steam_info = require('../../index');
console.log(steam_info.steam_api_key);

function getListOfSteamGames() {
    let steamID = $('#steamID_input').val();
    let apiKey = steam_api_key;

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