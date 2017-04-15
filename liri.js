var keys = require("./keys.js");
//As always, we grab the fs package to handle read/write
var fs = require("fs");
var command = process.argv[2];
var argument = process.argv[3];


var tweetKeys = keys.twitterKeys;
var Twitter = require('twitter');
var client = new Twitter(tweetKeys);
var params = {vknight81: 'nodejs'};


if (command === "my-tweets"){
	client.get('statuses/user_timeline', params, function(error, tweets, response){
		if(!error) {
		console.log(tweets);
		}
	});
	//I'm sure that I need to just pull the text and created_at properties on the objects that are generated here, but having trouble figuring out how.
}
else if (command === "spotify-this-song"){
	var inquirer = require("inquirer");
	var spotify = require("spotify");
	spotify.search({ type: 'track', query: (argument) }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
    else {
    	spotify.search({ type: 'track', query: "The Sign" }, function(err, data) {
    	console.log(data);
        return;
    });
	}
});
}
else if (command === "movie-this"){
	console.log();
}
else if (command === "do-what-it-says"){
	console.log();
};