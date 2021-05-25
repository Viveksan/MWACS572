const express = require("express");
const router = express.Router();
const gamesController = require("../controller/games.controller.js");

// router.route("/games").get(gamesController.gamesGetAll).post(gamesController.gamesAddOne);


// //create
// router.route("/games/").get(gamesController.gameGetAll).post(gamesController.gameAddOne);

// //update
// router.route("/games/:gameId").get(gamesController.gamesGetOne).put(gamesController.gamesUpdateOne);

// //delete
// router.route("/games/:gameId").get(gamesController.gamesGetOne).put(gamesController.gamesUpdateOne).delete(gamesController.gameDeleteOne);

router.route("/games")
.get(gamesController.gamesGetAll)
.post(gamesController.gamesAddOne);

router.route("/games/:gameId")
.get(gamesController.gamesGetOne)
.put(gamesController.gamesUpdateOne)
.delete(gamesController.gamesDeleteOne);

module.exports = router;
