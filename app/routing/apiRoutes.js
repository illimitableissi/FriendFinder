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
    surveyResults = req.body.scores
    console.log(surveyResults)


  });


}
