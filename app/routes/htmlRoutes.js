// dependencies
var path = require("path");

// routes
module.exports = function(app) {
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("/home", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // default "home"
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}