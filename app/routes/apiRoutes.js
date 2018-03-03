var path = require("path");

// linking routes to "data" source
var friends = require("../data/friends");

// route
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        var match = {
            name: "",
            photo: "",
            friendDif: 1000
        };

        console.log(req.body);

        // survey results
        var userData = req.body;
        var userScores = req.body.scores;

        // have to figure out the differences
        console.log(userScores);

        var diff = 0;

        // go through friend array
        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i]);
            diff = 0;

            // loop again like in timers, use j-best practice
            for (var j = 0; i < friends[i].scores[j]; j++) {
                diff += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                if (diff <= match.friendDif) {
                    match.name = friends[i].name;
                    match.photo = friends[i].photo;
                    match.friendDif = diff;
                };
            };
        };

        friends.push(userData);

        res.json(match);
    });
}



