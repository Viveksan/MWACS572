const express = require("express");
const router = express.Router();
const gamesController = require("../controller/games.controller.js");

//router.route("/add/:num1").get(numberController.numberAdder);
router.route("/games").get(gamesController.gamesGetAll).post(function(req,res){
    res.status(200).json({"jsonDataPost":true});
});
module.exports = router;