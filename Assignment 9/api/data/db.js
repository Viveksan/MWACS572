require("./jobsearch-schema");

const mongoose = require("mongoose");
const dbName = "meanJobsearch";
const dburl = "mongodb://localhost:27017/"+dbName;

//connect
mongoose.connect(dburl,{useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on("connected",function(){
    console.log("Mongoose connected to: "+dburl);
});
mongoose.connection.on("disconnected",function(){
    console.log("Mongoose disconnected.");
});
mongoose.connection.on("error", function(err){
    console.log("Mongoose connection error "+err);
});

//disconnect
process.on("SIGINT", function(){
    mongoose.connection.close(function(){
        console.log("Mongoose disconnected by app termination!");
        process.exit(0);
    });
});

//terminate
process.on("SIGTERM", function(){
    mongoose.connection.close(function(){
        console.log("Mongoose disconnected by app termination");
        process.exit(0);
    });
});

//Restart
process.on("SIGUSR2", function(){
    mongoose.connection.close(function(){
        console.log("Mongoose disconnected by app termination");
        process.kill(process.pid, "SIGUSR2");
    });
});