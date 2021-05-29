const express = require("express");
const jobController = require("../controller/controller.jobsearch");
const locationController = require("../controller/controller.location")

const router = express.Router();

// api/movies (GET)==> return all movies
// api/movies (POST)==> add one movie
router.route("/jobs")
    .get(jobController.getAllJobs)
    .post(jobController.addOneJob);

//api/movies/:movieId ==> get one movie
router.route("/jobs/:jobId")
    .get(jobController.getOneJob)
    .put(jobController.fullUpdateOneJob)
    .delete(jobController.deleteOneJob);

router.route("/jobs/:jobId/location")
    .get(locationController.locationGetAll)
    .post(locationController.addOneLocation);

// router.route("/jobs/:jobId/location/:locationId")
//     .put();



module.exports = router;