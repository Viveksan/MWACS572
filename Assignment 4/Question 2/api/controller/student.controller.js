//const dbConnection = require("../data/dbconnection.js");

const mongoose = require("mongoose");
const Student = mongoose.model("Student");

//getAllStudents
module.exports.studentsGetAll = function(req,res){
    // let offset = 0;
    // let limit = 7;
    
    // if(req.query && req.query.offset){
    //     offset = parseInt(req.query.offset, 10); 
    // }
    // if(req.query && req.query.limit){
    //     limit = parseInt(req.query.limit, 10); 
    // }

    Student.find().exec(function(err,students){
        console.log("Found Students ",students.length);
        res.status.json(students);
    });

    // const db = dbConnection.get();
    // const collection = db.collection("games");
    // collection.find().skip(offset).limit(limit).toArray(function(err,docs){
    //     res.status(200).json(docs);
    // })
};

//getOneStudent

module.exports.studentGetOne = function(req,res){
    const studentId = req.params.studentId;
    Student.findById(studentId).exec(function(err, student){
        res.status(200).json(student);
    });
};

//getStudentAddress

module.exports.getStudentAddress = function(req, res){
    const studentId = req.params.studentId;
    Student.findById(studentId).select("address").exec(function (err, address){
        res.status(200).json(address);
    });
};
