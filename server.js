// dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// creating an "express" server
var app = express();

// Initial port
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});