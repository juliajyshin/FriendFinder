// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
let path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'friend_finder',
    port: 8889
});

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });