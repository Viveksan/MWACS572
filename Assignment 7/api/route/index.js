const express = require("express");
const movieController = require("../controller/controller.movie");

const router = express.Router();

// api/movies (GET)==> return all movies
// api/movies (POST)==> add one movie
router.route("/movies")
    .get(movieController.getAllMovies)
    .post(movieController.addOneMovie);

//api/movies/:movieId ==> get one movie
router.route("/movies/:movieId")
    .get(movieController.getOneMovie)
    .put(movieController.fullUpdateOneMovie)
    .patch(movieController.fullUpdateOneMovie)
    .delete(movieController.deleteOneMovie);


module.exports = router;