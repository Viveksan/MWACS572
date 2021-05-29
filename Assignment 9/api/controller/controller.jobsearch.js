//watch out for self add require by VS
const mongoose = require("mongoose");

const Jobsearch = mongoose.model("Jobsearch");

module.exports.getAllJobs = function(req, res){
    console.log("Get all jobs controller.");
    console.log(req.query);

    const maxCount = 10;

    let offset = 0;
    let count = 5;

    if(req.query && req.query.offset){
        offset=parseInt(req.query.offset);
    }

    if(req.query && req.query.count){
        count = parseInt(req.query.count);
    }

    //This is the type check
    if(isNaN(offset)|| isNaN(count)){
        res.status(400).json({"message:":"QueryString offset and count should be numbers."});
    }

    //Limit check
    if(count > maxCount){
        response.status(400).json({"message":"QueryString count cannot exceed "+maxCount});

    }


    Jobsearch.find().skip(offset).limit(count).exec(function(err,jobs){
        const tempResponse = {
            status: 200,
            message: jobs
        }
        console.log("Get jobs from db");
        if(err){
            console.log("Error finding jobs");
            tempResponse.status = 500;
            tempResponse.message = "err";
        }else if(!jobs){
            tempResponse.status = 404;
            tempResponse.message = {"message": "Job ID not found"};
        }
        res.status(tempResponse.status).json(tempResponse.message);
    });
};

module.exports.getOneJob = function(req, res){
    console.log("Get one job controller.");
    const jobId = req.params.jobId;
    Jobsearch.findById(jobId).exec(function(err,jobs){
        const tempResponse = {
            status: 200,
            message: jobs
        }
        console.log("Get Job from db");
        if(err){
            console.log("Error finding job");
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

module.exports.addOneJob = function(req, res){
    console.log("Add one job controller.");
    const newJob = {};

    if(req.body.title){
    newJob.title = req.body.title;
    }
    if(req.body.salary){
        newJob.salary = parseInt(req.body.salary);
    }
    
    if(req.body.description){
        newJob.description = req.body.description;
    }
    if(req.body.experience){
        newJob.experience = req.body.experience;
    }
    
    newJob.skills = req.body.skills;
    
    if(req.body.postDate){
        newJob.postDate = req.body.postDate;
    }


    Jobsearch.create(newJob,function(err, addedjob){
        const tempResponse = {
            status: 201,
            message: ""
        };
        if(err){
            console.log("Error adding new job");
            tempResponse.status = 500;
            tempResponse.message = err;
        }else{
        console.log("Added Job from db");
            tempResponse.message = addedjob;
        }
        res.status(tempResponse.status).json(tempResponse.message);        
    });
};

module.exports.deleteOneJob = function(req, res){
    console.log("Delete one job controller.");
    const jobId = req.params.jobId;
    Jobsearch.findByIdAndDelete(jobId).exec(function(err, deletedJob){
        const tempResponse = {
            status: 204,
            message: deletedJob
        }
        if(err){
            console.log("Error deleting job");
            tempResponse.status = 500;
            tempResponse.message = err;
        }else if(!deletedJob){
            tempResponse.status = 404;
            tempResponse.message = {"message": "Job not found"};
        }
        console.log("Delete Job from db");
        res.status(tempResponse.status).json(tempResponse.message);
    });
};

module.exports.fullUpdateOneJob = function(req, res){
    console.log("Fully update one job controller.");
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
            fullUpdateJob.title = req.body.title;
            fullUpdateJob.salary = parseInt(req.body.salary);
            // fullUpdateJob.location = req.body.location;
            fullUpdateJob.description = req.body.description;
            fullUpdateJob.experience = req.body.experience;
            fullUpdateJob.skills = req.body.skills;
            fullUpdateJob.postDate = req.body.postDate;
    
            fullUpdateJob.save(function(err,fullUpdateJob){
                if(err){
                    console.log("Error Updating job");
                    tempResponse.status = 500;
                    tempResponse.message = err;
                }else {
                    console.log("Updated");
                    tempResponse.message = fullUpdateJob;
                }
                res.status(tempResponse.status).json(tempResponse.message);
            });
        }
    });
}