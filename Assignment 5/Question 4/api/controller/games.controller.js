require("./address.controller");
const mongoose = require("mongoose");
const Student = mongoose.model("Student");

//getAllGames
module.exports.studentsGetAll = function(req,res){
    let offset = 0;
    let limit = 7;
    
    if(req.query && req.query.offset){
        offset = parseInt(req.query.offset, 10); 
    }
    if(req.query && req.query.limit){
        limit = parseInt(req.query.limit, 10); 
    }

    Student.find().skip(offset).limit(limit).exec(function(err,students){
        console.log("Found students ",students.length);
        res.json(students);
    });

    // const db = dbConnection.get();
    // const collection = db.collection("games");
    // collection.find().skip(offset).limit(limit).toArray(function(err,docs){
    //     res.status(200).json(docs);
    // })
};

//getOneGame

module.exports.studentsGetOne = function(req,res){
    const studentId = req.params.studentId;
    Student.findById(studentId).exec(function(err, student){
        res.status(200).json(student);
    });
};

//create
module.exports.studentsAddOne = function(req, res){
    const newStudent = {};
    //newStudent.address={};
    newStudent.name = req.body.name;
    newStudent.gpa = parseFloat(req.body.gpa);
    newStudent.studentId = parseFloat(req.body.studentId);
    Student.create(newStudent, function (err, student) {        
            if(err){
                console.log("Error creating students");
                res.status(400).json(err);
            }else{
                console.log("Student created",student);
                res.status(201).json(student);
            }
        });
};

//update
module.exports.StudentsFullUpdateOne = function (req, res) {
    const studentId = req.params.studentId;
    console.log(req.body);
    Student.findById(studentId).exec(function (err, student) {
        const response = {status: 204,
            message: student
        };
        if(err){
            console.log("Error finding student");
            response.status = 500;
            response.message = err;
        }else if(!student){
            response.status = 404;
            response.message = { "message": "Student ID not found" };
        }
        if (response.status !== 204) {
            res.status(response.status).json(response.message);
        } else {
                res.status(response.status).json(response.message);
                student.name = req.body.name;
                student.gpa = req.body.gpa;
                student.studentId= req.body.studentId;
            student.save(function (err, updatedStudent) {
                if (err) {
                    response.status = 500;
                    response.message = updatedStudent;
                }
                res.status(response.status).json(response.message);
            });
        }
    });
}
//delete
module.exports.studentsDeleteOne = function (req, res) {
    const studentId = req.params.studentId;
    console.log("DELETE studentId ", studentId);
    Student.findByIdAndRemove(studentId).exec(function (err, deletedStudent) {
        const response = {status: 204};
        if(err){
            console.log("Error finding StudentId");
            response.status = 500;
            response.message = err;
        }else if(!deletedStudent){
            response.status = 404;
            response.message = {"message" : "Student not found"};
        }
        res.status(response.status).json(response.message);
    });
};

