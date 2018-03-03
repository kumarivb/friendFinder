// linking routes to "data" source
var friends = require("../data/friends");

// route
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
}