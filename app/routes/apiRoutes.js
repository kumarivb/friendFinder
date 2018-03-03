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
        var userScore = userData.score;

        // have to figure out the differences
        console.log(userScore);

        var diff = 0;

        // go through friend array
        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i]);
            diff = 0;

            // loop again like in timers, use j-best practice
            for (var j = 0; i < friends[i].score[j]; j++) {
                diff += math.abs(parseInt(userScore[j]) - parseInt(friends[i].score[j]));

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



