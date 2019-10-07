var friends = require("/../api/friends");

module.exports = function(app)  {
    app.get("api/friends", function(req, res)  {
        res.json(friends);
    });
}


//loop through friends
//math
//store result
//end of loop, array of all results. pick the highest as the best match.
//return that person

apiRoutes under POST section