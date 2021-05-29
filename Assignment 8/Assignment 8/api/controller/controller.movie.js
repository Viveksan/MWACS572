const mongoose = require("mongoose");

const Movie = mongoose.model("Movie");

module.exports.getAllMovies = function(req, res){
    console.log("Get all movies controller.");
    console.log(req.query);

    const maxCount = 10;

    let offset = 0;
    let count = 5;

    if(req.query && req.query.offset){
        offset=parseInt(req.query.offset);
    }

    if(req.query && req.query.count){
        count = parseInt(req.query.count);
    }

    //This is the type check
    if(isNaN(offset)|| isNaN(count)){
        res.status(400).json({"message:":"QueryString offset and count should be numbers."});
    }

    //Limit check
    if(count > maxCount){
        response.status(400).json({"message":"QueryString count cannot exceed "+maxCount});

    }


    Movie.find().skip(offset).limit(count).exec(function(err,movies){
        const tempResponse = {
            status: 200,
            message: movies
        }
        console.log("Get movies from db");
        if(err){
            console.log("Error finding movie");
            tempResponse.status = 500;
            tempResponse.message = "err";
        }else if(!movies){
            tempResponse.status = 404;
            tempResponse.message = {"message": "Movie ID not found"};
        }
        res.status(tempResponse.status).json(tempResponse.message);
    });
};

module.exports.getOneMovie = function(req, res){
    console.log("Get one movie controller.");
    const movieId = req.params.movieId;
    Movie.findById(movieId).exec(function(err,movies){
        const tempResponse = {
            status: 200,
            message: movies
        }
        console.log("Get movie from db");
        if(err){
            console.log("Error finding movie");
            tempResponse.status = 500;
            tempResponse.message = "err";
        }else if(!movies){
            tempResponse.status = 404;
            tempResponse.message = {"message": "Movie ID not found"};
        }
        res.status(tempResponse.status).json(tempResponse.message);
        //message change upon error, else set as movies
    });
};

module.exports.addOneMovie = function(req, res){
    console.log("Add one movie controller.");
    const newMovie = {};

    if(req.body.title){
    newMovie.title = req.body.title;
    }
    if(req.body.year){
    newMovie.year = parseInt(req.body.year);
    }
    if(req.body.genre){
    newMovie.genre = req.body.genre;
    }
    //newMovie.castandcrew = [];
    Movie.create(newMovie,function(err, addedmovie){
        const tempResponse = {
            status: 201,
            message: ""
        };
        if(err){
            console.log("Error adding new movie");
            tempResponse.status = 500;
            tempResponse.message = err;
        }else{
        console.log("Added Movie from db");
            tempResponse.message = addedmovie;
        }
        res.status(tempResponse.status).json(tempResponse.message);        
    });
};

module.exports.deleteOneMovie = function(req, res){
    console.log("Delete one movie controller.");
    const movieId = req.params.movieId;
    Movie.findByIdAndDelete(movieId).exec(function(err, deletedMovie){
        const tempResponse = {
            status: 204,
            message: deletedMovie
        }
        if(err){
            console.log("Error deleting movie");
            tempResponse.status = 500;
            tempResponse.message = err;
        }else if(!deletedMovie){
            tempResponse.status = 404;
            tempResponse.message = {"message": "Movie not found"};
        }
        console.log("Delete Movie from db");
        res.status(tempResponse.status).json(tempResponse.message);
    });
};

module.exports.fullUpdateOneMovie = function(req, res){
    console.log("Fully update one movie controller.");
    const movieId = req.params.movieId;
    //const fullUpdateMovie = {};
    Movie.findById(movieId).exec(function (err, fullUpdateMovie){
        const tempResponse = {
            status: 204,
            message: fullUpdateMovie
        }
        if(err){
            console.log("Error finding movie");
            tempResponse.status = 500;
            tempResponse.message = err;
        }else if(!fullUpdateMovie){
            tempResponse.status = 404;
            tempResponse.message = {"message": "Movie not found"};
        }
        //if no error finding the movie
        if(tempResponse.status !== 204){    //if error finding the movie
            res.status(tempResponse.status).json(tempResponse.message);
        }else{
            fullUpdateMovie.title = req.body.title;
            fullUpdateMovie.year = parseInt(req.body.year);
            fullUpdateMovie.genre = req.body.genre;
    
            fullUpdateMovie.save(function(err,fullUpdateMovie){
                if(err){
                    console.log("Error Updating movie");
                    tempResponse.status = 500;
                    tempResponse.message = err;
                }else {
                    console.log("Updated");
                    tempResponse.message = fullUpdateMovie;
                }
                res.status(tempResponse.status).json(tempResponse.message);
            });
        }
    });
}

module.exports.partialUpdateMovie = function(req, res){
    console.log("Partial update one movie controller.");
    const movieId = req.params.movieId;

    Movie.findById(movieId).exec(function (err, partialUpdateMovie){
        const tempResponse = {
            status: 204,
            message: partialUpdateMovie
        }
        if(err){
            console.log("Error finding movie");
            tempResponse.status = 500;
            tempResponse.message = err;
        }else if(!partialUpdateMovie){
            tempResponse.status = 404;
            tempResponse.message = {"message": "Movie not found"};
        }
        //if no error finding the movie
        if(tempResponse.status !== 204){    //if error finding the movie
            res.status(tempResponse.status).json(tempResponse.message);
        }else{
            if(req.body.title){
                partialUpdateMovie.title = req.body.title;
            }
            if(req.body.year){
                partialUpdateMovie.year = parseInt(req.body.year);
            }
            if(req.body.title){
                partialUpdateMovie.genre = req.body.genre;
            }    
            partialUpdateMovie.save(function(err,partialUpdateMovie){
                if(err){
                    console.log("Error Updating movie");
                    tempResponse.status = 500;
                    tempResponse.message = err;
                }else {
                    console.log("Updated");
                    tempResponse.message = partialUpdateMovie;
                }
                res.status(tempResponse.status).json(tempResponse.message);
            });
        }
    });
}

