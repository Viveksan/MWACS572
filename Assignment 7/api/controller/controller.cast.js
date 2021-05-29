const mongoose = require("mongoose");

const Movie = mongoose.model("Movie");

module.exports.getAllPublisher = function(req, res){
    console.log("Get all Publishers for a game.");
    Movie.findById(movieId).select("castandcrew").exec(function(err,movies){
        const tempResponse = {
            status: 204,
            message: movies.castandcrew
        }
        console.log("Get movie from db");
        if(err){
            console.log("Error finding movie");
            tempResponse.status = 500;
            tempResponse.message = err;
        }else if(!movies){
            tempResponse.status = 404;
            tempResponse.message = {"message": "Movie ID not found"};
        } 
        res.status(tempResponse.status).json(tempResponse.message);
        //message change upon error, else set as movies
    });
};
