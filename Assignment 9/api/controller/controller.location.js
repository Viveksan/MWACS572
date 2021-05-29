const mongoose = require("mongoose");
const Jobsearch = mongoose.model("Jobsearch");

module.exports.locationGetAll = function(req, res){
    console.log("Get all location controller.");

    const jobId = req.params.jobId;

    Jobsearch.findById(jobId).select("location").exec(function(err,jobs){
        const tempResponse = {
            status: 200,
            message: jobs
        }
        console.log("Get Job from db");
        if(err){
            console.log("Error finding Job");
            tempResponse.status = 500;
            tempResponse.message = "err";
        }else if(!jobs){
            tempResponse.status = 404;
            tempResponse.message = {"message": "Job ID not found"};
        }
        res.status(tempResponse.status).json(tempResponse.message);
        //message change upon error, else set as jobs
    });
};

module.exports.addOneLocation = function(req, res){
    console.log("Add one location controller.");
    const jobId = req.params.jobId;
    Jobsearch.findById(jobId).exec(function (err, fullUpdateJob){
        const tempResponse = {
            status: 204,
            message: fullUpdateJob
        }
        if(err){
            console.log("Error finding job");
            tempResponse.status = 500;
            tempResponse.message = err;
        }else if(!fullUpdateJob){
            tempResponse.status = 404;
            tempResponse.message = {"message": "Job not found"};
        }
        //if no error finding the job
        if(tempResponse.status !== 204){    //if error finding the job
            res.status(tempResponse.status).json(tempResponse.message);
        }else{
            fullUpdateJob.unit = req.body.unit;
            fullUpdateJob.street = parseInt(req.body.street);
            fullUpdateJob.pincode = parseInt(req.body.pincode);
    
            fullUpdateJob.save(function(err,fullUpdateJob){
                if(err){
                    console.log("Error Adding job");
                    tempResponse.status = 500;
                    tempResponse.message = err;
                }else {
                    console.log("Added");
                    tempResponse.message = fullUpdateJob;
                }
                res.status(tempResponse.status).json(tempResponse.message);
            });
        }
    });
};