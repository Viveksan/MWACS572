const express = require("express");
const router = express.Router();
const gamesController = require("../controller/games.controller.js");
const publisherController= require("../controller/publisher.controller");

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

router.route("/games/:gameId/publisher")
.get(publisherController.publisherGet)
.post(publisherController.publisherAdd)
.put(publisherController.publisherUpdate)
.delete(publisherController.publisherDelete);

module.exports = router;
