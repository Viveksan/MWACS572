const express = require("express");
const router = express.Router();
const studentController = require("../controller/student.controller");
const addressController= require("../controller/address.controller");

router.route("/students")
.get(studentController.studentsGetAll)
.post(studentController.studentsAddOne);

router.route("/students/:studentId")
.get(studentController.studentsGetOne)
.put(studentController.studentsUpdateOne)
.delete(studentController.studentsDeleteOne);

router.route("/students/:studentId/addresses").get(addressController.addressGetAll);
router.route("/students/:studentId/addresses/:zipcode").get(addressController.addressGetAll);


module.exports = router;
