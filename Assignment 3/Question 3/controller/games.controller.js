const dbConnection = require("../data/dbconnection.js");

module.exports.gamesGetAll = function(req,res){
    const db = dbConnection.get();
    const collection = db.collection("games");

    let offset = 0;
    let limit = 7;

    if(req.query && req.query.limit){
        limit = parseInt(req.query.limit, 10); 
    }

    collection.find().skip(offset).limit(limit).toArray(function(err,docs){
        res.status(200).json(docs);
    })
};