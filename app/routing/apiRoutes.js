var path = require('path');

// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../data/friends.js");
// console.log(friendData)

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // ---------------------------------------------------------------------------

  app.get("/api/friends/", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends/", function(req, res) {

        var userInput = req.body;
        var userScores = userInput.scores    
        var bestMatch = {
        name: "",
        photo: "",
        friendDifference: 1000
        };


		// convert the values in userScores to integers
		for (var i = 0; i< userScores.length; i++) {
			userScores[i] = parseInt(userScores[i]);
		}

		var bestDifference = 1000; 

		for (i = 0; i < friends.length; i++) {
			var tempDifference = difference(userScores, friends[i].scores);
            console.log(`The difference between your scores: ${userScores} and ${friends[i].name} scores: ${friends[i].scores} is ${tempDifference}`);
            
			if (tempDifference < bestDifference) {
				bestDifference = tempDifference;
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendDifference = tempDifference
			}
		}

		function difference(a, b) {
			var differenceAmount = 0;
			for (var i=0; i< a.length; i++) {
				differenceAmount += Math.abs( a[i] - b[i]);
			}
			return differenceAmount;
        }

    console.log(bestMatch)
    friends.push(userInput);
    console.log("New user added");
    console.log(userInput);
    res.json(bestMatch)
  });
}
