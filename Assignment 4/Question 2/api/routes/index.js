const express = require("express");
const router = express.Router();
const studentController = require("../controller/student.controller");

router.route("/students").get(studentController.studentsGetAll);
router.route("/students/:studentId").get(studentController.studentGetOne);
router.route("/students/:studentId/address").get(studentController.getStudentAddress);

module.exports = router;