var path = require('path');

// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendData = require("../data/friends.js");
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
    res.json(friendData);
  });

  app.post("/api/friends/", function(req, res) {
    var totalDifference = 0;
    var bestMatch = {
        name: "",
        photo: "",
        friendDifference: 2000
    };
     var userData = req.body;
     var userName = userData.name;
     var userScores = userData.scores;

     var b = userScores.map(function(item) {
         return parseInt(item, 10);
     });
    userData = {
        name: req.body.name,
        photo: req.body.photo,
        scroes: b
    };
    console.log(`Name ${userName}`);
    console.log(`User Scores ${userScores} `)

    var sum = b.reduce((a, b) => a + b, 0);
  });
}
