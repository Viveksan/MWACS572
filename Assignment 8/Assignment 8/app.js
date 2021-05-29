require("./api/data/db");

const express = require("express");
const app = express();
const path = require("path");
const routes = require("./api/route");

app.set("port",5000);

app.use(express.json());

app.use(function(req,res,next){
    console.log(req.method, req.url);
    next(); 
});

app.use("/",express.static(path.join(__dirname,"public/angular-app")));
app.use("/node_modules", express.static(path.join(__dirname,"node_modules")));
//app.use(express.json());
//app.use(express.json({extended : false}));

app.use("/api",routes);
//app.use(express.urlencoded({extended:false}));

const server = app.listen(app.get("port"),function(){
    const port = server.address().port;
    console.log("Listening to port: "+port);
});