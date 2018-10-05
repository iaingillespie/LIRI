var moment = require("moment");
var spotify = require("node-spotify-api");
var request = require("request");
var dotenv = require("dotenv");

var userinput = process.argv[2];
var userinput2 = process.argv[3];

var spotify = new Spotify({
id: "<your spotify client id>",
secret: "<your spotify client secret>"
});





function spotifyCall(){
    console.log("spotify")
    spotify.search({ type: 'track', query: userinput2 }, function(err, data) {
            if (err) {
              return console.log('Error occurred: ' + err);
            }
            
            console.log(data); 
            });
 
}



switch (userinput) {
    case 'spotify-this-song':

        spotifyCall();

        break;

    case 'concert-this':

        console.log("concert")

        break;

    case 'movie-this':

        console.log("movie")

        break;

    case 'do-what-it-says':

        console.log("do")

        break;

    default:
        console.log("not an input")
        break;
}