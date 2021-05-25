//const dbConnection = require("../data/dbconnection.js");

const mongoose = require("mongoose");
const Game = mongoose.model("Game");

//getAllGames
module.exports.gamesGetAll = function(req,res){
    let offset = 0;
    let limit = 7;
    
    if(req.query && req.query.offset){
        offset = parseInt(req.query.offset, 10); 
    }
    if(req.query && req.query.limit){
        limit = parseInt(req.query.limit, 10); 
    }

    Game.find().skip(offset).limit(limit).exec(function(err,games){
        console.log("Found games ",games.length);
        res.json(games);
    });

    // const db = dbConnection.get();
    // const collection = db.collection("games");
    // collection.find().skip(offset).limit(limit).toArray(function(err,docs){
    //     res.status(200).json(docs);
    // })
};

//getOneGame

module.exports.gamesGetOne = function(req,res){
    const gameId = req.params.gameId;
    Game.findById(gameId).exec(function(err, game){
        res.status(200).json(game);
    });
};

//create
module.exports.gamesAddOne = function(req, res){
    Games.create(
        {
            title: req.body.title, 
            year: parseInt(req.body.year),
            price: parseFloat(req.body.price),
            designer: req.body.designer,
          //  publisher: [name: "empty", location[]],
          minPlayers: parseInt(req.body.minPlayers),
          maxPlayers: parseInt(req,body.maxPlayers),
          rate: parseFloat(req.body.rate)},
        
        function(err,game){
            if(err){
                console.log("Error creating games");
                res.status(400).json(err);
            }else{
                console.log("Game created",game);
                res.status(201).json(game);
            }
        });
};

//update
module.exports.gamesUpdateOne = function(req, res){
    const gameId = req.params.gameId;
    Game.findById(gameId).select("-reviews -publisher").exec(function(err, game){
        const response = {status: 204};
        if(err){
            console.log("Error finding game");
            response.status = 500;
            response.message = err;
        }else if(!game){
            response.status = 404;
            response.message = {"message": "Game ID not found"};
        }
        if(response.status!==204){
            res.status(response.status).json(response.message);
        }else{
            game.title = req.body.title;
            game.year = parseInt(req.body.year);
            game.price = parseFloat(req.body.price);
            game.designer = req.body.designer;
            game.rate = parseFloat(req.body.rate);
            game.minAge = parseInt(req.body.minAge);
            game.save(function(err,updatedGame){
                if(err){
                    response.status = 500;
                    response.message = err;
                }
                res.status(response.status).json(respinse.message);
            });
        }
    });

};

//delete
module.exports.gamesDeleteOne = function(req, res){
    const gameId = req.params.gameId;
    console.log("DELETE gameId ", gameId);
    Game.findByIdAndRemove(gameId).exec(function(err,deletedGame){
        const response = {status: 204};
        if(err){
            console.log("Error finding game");
            response.status = 500;
            response.message = err;
        }else if(!deletedGame){
            response.status = 404;
            response.message = {"message" : "Game ID not found"};
        }
        res.status(response.status).json(response.message);
    });
};

