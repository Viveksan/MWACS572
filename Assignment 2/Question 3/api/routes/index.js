const express = require("express");
const router = express.Router();
const numberController = require("../controller/twoNumberAdder.controller.js");

router.route("/add/:num1").get(numberController.numberAdder);
module.exports = router;