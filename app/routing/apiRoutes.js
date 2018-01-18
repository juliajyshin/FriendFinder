// LOAD DATA
// ===============================================================================
var friends = require("../data/friends");

// ROUTING
// ===============================================================================
module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
      });

    app.post("/api/friends", function(req, res) {
    if (friends.length < 5) {
        friends.push(req.body);
      res.json(true);
    }
    else {
        friends.push(req.body);
      res.json(false);
    }
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    friends = [];
    console.log(friends);
  });
};
