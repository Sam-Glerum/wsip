// Set the value of the input field to an empty string when a user clicks the field
function removeFieldValue() {
    $('#steamID_input').val("");
}

function showSelectedGame() {

}

function getListOfSteamGames() {
    let steamID = $('#steamID_input').val();
    console.log(steamID);
}