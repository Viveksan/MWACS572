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
